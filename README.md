# Worship night lyrics

A phone-friendly lyrics site. People scan a QR code and scroll through the songs themselves.

## Files

- `setlist.yaml` sets the title and the song order.
- `songs/` holds one `.txt` file per song.
- `index.html` is the site itself. You shouldn't need to edit it.
- `sw.js` saves the site on each phone after the first visit, so it still works if Wi-Fi drops.

## Put it online with GitHub Pages (one time)

1. Sign in at github.com and create a new **public** repository (for example `lyrics`).
2. On the new repository page, choose **uploading an existing file**, then drag in `index.html`, `setlist.yaml`, `sw.js`, `README.md` and the whole `songs` folder. Click **Commit changes**.
3. Go to **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, and click **Save**.
4. After a minute or two, the page shows your address, like `https://yourname.github.io/lyrics/`.
5. Make a QR code for that address with a generator that creates a plain, static code (not a "dynamic" code that can expire). Test it on a couple of phones.

## Before each worship night

**Add a song:** open the `songs` folder on GitHub, click **Add file → Create new file**, name it something like `way-maker.txt`, and paste:

```
# Way Maker
> Writer names, © year publisher, CCLI Song #0000000

Verse 1
(lyrics pasted from Planning Center)
```

**Set the order:** open `setlist.yaml`, click the pencil icon, and list the song files under `songs:` in order. Commit the change.

The site updates about a minute after each commit. Phones that already have the site open just need to reload.

## Notes

- Section names like `Verse 1`, `CHORUS`, `[Bridge]` and `Pre-Chorus` are styled automatically. Chord lines are removed.
- Lines starting with `//` in a song file, or `#` in `setlist.yaml`, are notes that never show on the site.
- If a song in the set list shows "Lyrics for this song aren't available yet," check that its file name in `setlist.yaml` matches the file in `songs/` exactly.
- To add your CCLI license number under every song, uncomment the `license:` line in `setlist.yaml`.
- The site tells search engines not to list it, but anyone with the link can open it.
