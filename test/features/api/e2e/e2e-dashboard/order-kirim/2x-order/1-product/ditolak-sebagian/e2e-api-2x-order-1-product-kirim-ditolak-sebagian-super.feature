Feature: e2e api 2x order 1 product kirim ditolak sebagian super

        Scenario: e2e api 2x order 1 product kirim ditolak sebagian super
             When api user login
             When api user create a new first order
             When api user create a new second order
             When api user get first order detail
             When api user get second order detail
             When api user get order detail global invoice
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

             When api courier user login
             When api courier user kirim 2x order 1 produk ditolak sebagian super

        Examples:
                  | a | b |
                  | a | b |