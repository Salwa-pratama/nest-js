# Express HTTP Request

- Saat membuat Routing, biasanya kita ingin mendapatkan
  informasi yang dikirim oleh pengguna, baik itu Query Param, Headers, request Body dan lain-lain
- Karena NestJS secara default menggunakan Express, kita bisa menambahkan parameter express.Request dan menggunakan decorator @Req()
- REKOMENDASI : walaupun kita bisa menggunakan object express.Request, namun direkomkan kita langsung menyebutkan data yang dibutuhkan parameter menggunakan Decorator yang sudah disediakan oleh Nest

tidak direkomendasikan berketergantungan sama express untuk http requestnya

# Request Decorator

- @Req() untuk express
- @Param(key?) untuk req.params.key?
- @Body(Key?) untuk req.body.key?
- @Query(Key?) untuk req.query.key?
- @Header(Key?) untuk req.header.key?
- @Ip(Key?) untuk req.ip
- @HostParam() untuk req.hosts

# HTTPS Response

- Secara default, function sudah memiliki return value
