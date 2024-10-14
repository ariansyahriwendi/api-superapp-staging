Feature: E2E Order - Kirim

        Scenario: Order - kirim
             When api user login
             When api user create a new order
             When api user get order detail
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

             When api user courier login
             When api kirim 1x order 1 produk diterima semua

        Examples:
                  | a | b |
                  | a | b |