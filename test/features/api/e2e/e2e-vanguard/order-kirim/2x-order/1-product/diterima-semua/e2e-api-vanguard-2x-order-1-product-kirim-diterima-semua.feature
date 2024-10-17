@e2e-api-vanguard-2x-order-1-product-kirim-diterima-semua
Feature: e2e api vanguard 2x order 1 product kirim diterima semua

        Scenario: e2e api vanguard 2x order 1 product kirim diterima semua

             When api vanguard user login
             When api vanguard user order 1 product first order
             When api vanguard user order 1 product second order

             When api user login
             When api user get first order detail
             When api user get second order detail
             When api user get order detail global invoice
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

             When api courier user login
             When api courier user kirim 2x order 1 product diterima semua

        Examples:
                  | a | b |
                  | a | b |