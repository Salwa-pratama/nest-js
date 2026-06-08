# Contreller

- Controller merupakan class yang menggunakan decorator
  @Controller
- Controller bertugas sebagai class untuk memproses
  HTTP Request yang masuk dan mengembalikan HTTP Response
- Setelah membuat Controller, Kita perlu
  Meregristasikan Controller pada Module
- Saat menggunakan decorator @Controller, kita bisa
  menentukan Prefix Path yang akan kita gunakan, misal @Controller("/api/users"), yang artinya Controller ini akan menerima request dari Path dimulai dari /api/users

# Membyat controller
 mirip dengan perintah yang sama dalam pembuatan module
