Feature: E2E Penjualan - Dikirim

        Scenario: Order 2x - Dikirim 1x pengiriman
             When api user login
             When api user create a new first order
             When api user create a new second order
             When api user get first order detail
             When api user get second order detail
             When api user get order detail invoice global
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

             When api user courier login
             When api user courier kirim

             When api user login
             When api user get order detail invoice global
             When api user create csv setoran
             When api user upload setoran document
             When api user import setoran
             When api user create setoran
             When api user get transfer document id global invoice
             When api user selesaikan pesanan
             When api user complete order

        Examples:
                  | a | b |
                  | a | b |