describe('Login  page tests', () => {
  beforeEach(() => {
    //  Arrange
    cy.visit('http://localhost:5173/login')
  })

  it('Form success test', () => {
    //Act
    cy.get('[data-cy = "login-email-input"]').type("ali@bas.com")
    cy.get('[data-cy = "login-password-input"]').type("123Qw*458*")
    cy.get('[data-cy = "login-terms-input"]').check()
    cy.get('[data-cy = "login-submit-btn"]').should("be.enabled")

    // Assert
    // cy.contains("ANA SAYFA")
  })

  it('Email validation test', () => {
    //Act
    cy.get('[data-cy = "login-email-input"]').type("alibas.com")
    cy.get('[data-cy = "login-password-input"]').type("123Qw*458*")
    cy.get('[data-cy = "login-terms-input"]').check()
    cy.contains("Lütfen geçerli bir email adresi giriniz.").should("be.visible")

    // Assert
    // cy.contains("ANA SAYFA")
  })

  it('Email & Password validation test', () => {
    //Act
    cy.get('[data-cy = "login-email-input"]').type("alibas.com")
    cy.get('[data-cy = "login-password-input"]').type("123")
    cy.get('[data-cy = "login-terms-input"]').check()
    cy.contains("Lütfen geçerli bir email adresi giriniz.").should("be.visible")
    cy.contains("Lütfen geçerli bir şifre giriniz.").should("be.visible")

    // Assert
    // cy.contains("ANA SAYFA")
  })

  it('Terms validation test', () => {
    //Act
    cy.get('[data-cy = "login-email-input"]').type("ali@bas.com")
    cy.get('[data-cy = "login-password-input"]').type("123Qw*458*")
    cy.get('[data-cy = "login-submit-btn"]').should("be.disabled")

    // Assert
    // cy.contains("ANA SAYFA")
  })

})