Feature: E2E Order - Kirim

        Scenario: Order - kirim
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

             When api user courier login
             When api kirim 2x order 1 produk ditolak semua oleh customer

        Examples:
                  | a | b |
                  | a | b |