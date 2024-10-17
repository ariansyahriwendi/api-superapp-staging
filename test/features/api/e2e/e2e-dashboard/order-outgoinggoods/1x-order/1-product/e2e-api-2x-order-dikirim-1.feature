Feature: e2e order - dikirim

        Scenario: 2x order - dikirim
             When api user login
             When api user create a new first order
             When api user create a new second order
             When api user get order detail invoice global
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim

        Examples:
                  | a | b |
                  | a | b |