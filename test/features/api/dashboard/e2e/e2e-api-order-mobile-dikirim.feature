Feature: E2E Dikirim

        Scenario: Order Melalui Mobile Apps - Dikirim
             When api user login
             When api user get order id
             When api user get order detail
             When api user ganti vendor
             When api user assign kurir
             When api user siap dikirim
             When api user dikirim


        Examples:
                  | a | b |
                  | a | b |