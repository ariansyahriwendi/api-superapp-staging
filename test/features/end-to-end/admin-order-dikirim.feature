Feature: Admin Order - Dikirim

        Scenario: Create order - dikirim
             When I login as admin
             When I create a new order
             When I get order detail
             When I ganti vendor
             When I assign kurir
             When I siap dikirim
             When I dikirim


        Examples:
                  | a | b |
                  | a | b |