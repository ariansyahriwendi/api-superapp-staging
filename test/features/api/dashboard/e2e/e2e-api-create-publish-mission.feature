Feature: E2E Mission

        Scenario: Create - publish mission
             When api user login
             When api user create mission
             When api user get mission
             When api user publish mission

        Examples:
                  | a | b |
                  | a | b |