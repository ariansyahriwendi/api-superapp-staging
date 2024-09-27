Feature: E2E Penjualan - Dikirim

        Scenario: Penjualan - Dikirim with Voucher
             When api user login
             When api user create a new order 4 product with voucher
             When api user get order detail
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim


        Examples:
                  | a | b |
                  | a | b |