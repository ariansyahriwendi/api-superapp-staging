Feature: e2e api 2x order 4 product kirim ditolak sebagian customer

        Scenario: e2e api 2x order 4 product kirim ditolak sebagian customer
             When api user login
             When api user create a new first order 4 product
             When api user create a new second order 4 product
             When api user get first order detail 4 product
             When api user get second order detail 4 product
             When api user get order detail global invoice
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

             When api courier user login
             When api courier user kirim 2x order 4 product ditolak sebagian customer

        Examples:
                  | a | b |
                  | a | b |