Feature: e2e api 1x order 1 product kirim ditolak sebagian customer

        Scenario: e2e api 1x order 1 product kirim ditolak sebagian customer
             When api user login
             When api user create a new order
             When api user get order detail
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

             When api courier user login
             When api courier user kirim 1x order 1 product ditolak sebagian customer

        Examples:
                  | a | b |
                  | a | b |