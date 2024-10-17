@e2e-api-vanguard-pemesanan-dikirim
Feature: e2e api vanguard pemesanan dikirim

        Scenario: api vanguard pemesanan dikirim

             When api vanguard user login
             When api vanguard user pemesanan

             When api user login
             When api user get order detail
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

        Examples:
                  | a | b |
                  | a | b |