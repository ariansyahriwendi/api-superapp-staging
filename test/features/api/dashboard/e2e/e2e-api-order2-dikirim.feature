Feature: E2E Penjualan - Dikirim

        Scenario: Penjualan 2 Invoice - Dikirim dengan 1 pengiriman
             When api user login
             When api user create a new order
             When api user create a new order
             When api user get order detail invoice global
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim


        Examples:
                  | a | b |
                  | a | b |