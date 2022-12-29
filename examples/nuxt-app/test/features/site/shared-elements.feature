Feature: Shared site elements

  As a user I can view and interact with shared elements such as the primary nav and footer.

  @mockserver
  Scenario: Breadcrumbs (page exists in menu)
    Given the endpoint "/api/tide/site" with query "?id=8888" returns fixture "/site/shared-elements" with status 200
    And the endpoint "/api/tide/page" with query "?path=/level-3-item-2&site=8888" returns fixture "/landingpage/home" with status 200
    Given I visit the page "/level-3-item-2"
    Then the breadcrumbs should have the following items
      | text             | url             |
      | Home             | /               |
      | Level 1 - Item 1 | /level-1-item-1 |
      | Level 2 - Item 1 | /level-2-item-1 |
      | Level 3 - Item 2 |                 |

  @mockserver
  Scenario: Breadcrumbs (page does not exists in menu)
    Given the endpoint "/api/tide/site" with query "?id=8888" returns fixture "/site/shared-elements" with status 200
    And the endpoint "/api/tide/page" with query "?path=/some-random-page&site=8888" returns fixture "/landingpage/home" with status 200
    Given I visit the page "/some-random-page"
    Then the breadcrumbs should have the following items
      | text              | url |
      | Home              | /   |
      | Demo Landing Page |     |


  @mockserver
  Scenario: Breadcrumbs (root page)
    Given the endpoint "/api/tide/site" with query "?id=8888" returns fixture "/site/shared-elements" with status 200
    And the endpoint "/api/tide/page" with query "?path=/&site=8888" returns fixture "/landingpage/home" with status 200
    Given I visit the page "/"
    Then the breadcrumbs should not exist

  @mockserver
  Scenario: Last updated date
    Given the endpoint "/api/tide/site" with query "?id=8888" returns fixture "/site/shared-elements" with status 200
    And the endpoint "/api/tide/page" with query "?path=/some-random-page&site=8888" returns fixture "/landingpage/home" with status 200
    Given I visit the page "/some-random-page"

    Then the last updated date text should read "Last updated: Wednesday, 2 November 2022"

  @mockserver
  Scenario: Topics and tags
    Given the endpoint "/api/tide/site" with query "?id=8888" returns fixture "/site/shared-elements" with status 200
    And the endpoint "/api/tide/page" with query "?path=/some-random-page&site=8888" returns fixture "/landingpage/home" with status 200
    Given I visit the page "/some-random-page"

    Then the page should have the following topic tags
      | text       | url               |
      | Demo Topic | /topic/demo-topic |
      | Demo Tag   | /tags/demo-tag    |

  @mockserver
  Scenario: Footer
    Given the endpoint "/api/tide/site" with query "?id=8888" returns fixture "/site/shared-elements" with status 200
    And the endpoint "/api/tide/page" with query "?path=/some-random-page&site=8888" returns fixture "/landingpage/home" with status 200
    Given I visit the page "/some-random-page"

    Then the footer nav section with title "Level 1 - Item 1" should have the following links
      | text             | url             |
      | Level 1 - Item 1 | /level-1-item-1 |
      | Level 2 - Item 1 | /level-2-item-1 |
      | Level 2 - Item 2 | /level-2-item-2 |
    Then the footer nav section with title "Level 1 - Item 2" should have the following links
      | text             | url             |
      | Level 1 - Item 2 | /level-1-item-2 |
    Then the footer should have the following links
      | text          | url            |
      | Footer link 1 | /footer-link-1 |
      | Footer link 2 | /footer-link-2 |
    Then the footer copyright text should be "Test footer copyright html"
    Then the footer acknowledgement text should be "Test footer acknowledgement"
    Then the footer should have the following logos
      | alt         | url          | src                                                                                                                               |
      | Test logo 1 | /test-logo-1 | https://develop.content.reference.sdp.vic.gov.au/sites/default/files/tide_demo_content/Aerial-shot-of-new-housing-development.jpg |
      | Test logo 2 | /test-logo-2 | https://develop.content.reference.sdp.vic.gov.au/sites/default/files/tide_demo_content/2018-19-State-Budget.jpg                   |


