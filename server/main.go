package main

import (
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

const (
	staticDir = "/app/static"
	imagesDir = "/app/images"
	listenAddr = ":9090"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/api/images/", serveImage)
	mux.HandleFunc("/", serveStatic)

	log.Printf("Luxury Nails server listening on %s", listenAddr)
	if err := http.ListenAndServe(listenAddr, mux); err != nil {
		log.Fatal(err)
	}
}

// serveImage handles /api/images/{filename} requests.
// Images are served from a non-public directory with path traversal protection.
func serveImage(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	name := strings.TrimPrefix(r.URL.Path, "/api/images/")
	if name == "" || strings.Contains(name, "..") || strings.ContainsAny(name, `/\`) {
		http.NotFound(w, r)
		return
	}

	fpath := filepath.Join(imagesDir, name)

	f, err := os.Open(fpath)
	if err != nil {
		http.NotFound(w, r)
		return
	}
	defer f.Close()

	info, err := f.Stat()
	if err != nil || info.IsDir() {
		http.NotFound(w, r)
		return
	}

	ext := strings.ToLower(filepath.Ext(name))
	switch ext {
	case ".jpg", ".jpeg":
		w.Header().Set("Content-Type", "image/jpeg")
	case ".png":
		w.Header().Set("Content-Type", "image/png")
	case ".webp":
		w.Header().Set("Content-Type", "image/webp")
	case ".gif":
		w.Header().Set("Content-Type", "image/gif")
	case ".svg":
		w.Header().Set("Content-Type", "image/svg+xml")
	default:
		w.Header().Set("Content-Type", "application/octet-stream")
	}

	w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
	io.Copy(w, f)
}

// serveStatic serves the React SPA from /app/static.
// Falls back to index.html for client-side routing.
func serveStatic(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path
	if path == "/" {
		path = "/index.html"
	}

	fpath := filepath.Join(staticDir, filepath.Clean(path))

	if !strings.HasPrefix(fpath, staticDir) {
		http.NotFound(w, r)
		return
	}

	if _, err := os.Stat(fpath); err != nil {
		fpath = filepath.Join(staticDir, "index.html")
	}

	http.ServeFile(w, r, fpath)
}
