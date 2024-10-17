Feature: E2E Penjualan - Dikirim

        Scenario: Penjualan - Dikirim 4 Product
             When api user login
             When api user create a new order 4 product
             When api user get order detail 4 product
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

          #    When api user courier login
          #    When api user courier kirim

          #    When api user login
          #    When api user get order detail
          #    When api user create csv setoran
          #    When api user upload setoran document
          #    When api user import setoran
          #    When api user create setoran
          #    When api user get transfer document id
          #    When api user selesaikan pesanan
          #    When api user complete order

        Examples:
                  | a | b |
                  | a | b |