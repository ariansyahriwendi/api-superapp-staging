Feature: E2E Penjualan - Dikirim - Kirim

        Scenario: Penjualan - Dikirim - Courier Kirim
             When api user login
             When api user create a new order
             When api user get order detail
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

             When api user courier login
             When api user courier kirim

        Examples:
                  | a | b |
                  | a | b |