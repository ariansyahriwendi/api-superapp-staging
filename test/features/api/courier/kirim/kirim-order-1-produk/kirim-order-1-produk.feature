Feature: Kirim Order 1 Product

        Scenario: Kirim Order 1 Product
             When api kirim order 1 produk diterima semua
             When api kirim order 1 produk ditolak sebagian oleh super
             When api kirim order 1 produk ditolak sebagian oleh customer
             When api kirim order 1 produk ditolak semua oleh super
             When api kirim order 1 produk ditolak semua oleh customer

        Examples:
                  | a | b |
                  | a | b |