Feature: e2e api 1x order 4 product kirim ditolak semua customer

        Scenario: e2e api 1x order 4 product kirim ditolak semua customer
             When api user login
             When api user create a new order 4 product
             When api user get order detail 4 product
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

             When api courier user login
             When api courier user kirim 1x order 4 product ditolak semua customer

        Examples:
                  | a | b |
                  | a | b |