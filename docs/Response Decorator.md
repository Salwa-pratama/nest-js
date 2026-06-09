# Response decorator

- @HttpCode(code) untuk mengubah response status code
- @Header(ker, value) untuk mengubah response header
- @Redirect(location, code) untuk melakukan redirect, lokasi redirect bisa diubah dengan mengembalikan data HttpRedirectResponse pada method nya
- @Next() untuk express.NextFunction

# ini untuk Redirect Satus response
| Status | Arti                                      |
| ------ | ----------------------------------------- |
| 301    | Permanent Redirect                        |
| 302    | Temporary Redirect                        |
| 303    | See Other                                 |
| 307    | Temporary Redirect (method dipertahankan) |
| 308    | Permanent Redirect (method dipertahankan) |
