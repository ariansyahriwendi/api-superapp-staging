Feature: Setoran

        Scenario: Setoran
             When api user login
             When api user create csv setoran
             When api user upload setoran document
             When api user import setoran
             When api user create setoran
             When api user get transfer document id
             When api user selesaikan pesanan
             When api user complete order

        Examples:
                  | a | b |
                  | a | b |