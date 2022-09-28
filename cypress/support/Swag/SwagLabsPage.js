const el = require ('./SwagElements').ELEMENTS
class Page {

    produto(){
        
        cy.get(el.cartBackPack).click()
        cy.get(el.cart).click()
        cy.get(el.titlePage).should('have.text', 'Your Cart')
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoLogout).click()
    }
    remover(){
        cy.get(el.cartBackPack).click()
        cy.get(el.cart).click()
        cy.get(el.botaoRemove).click()
        cy.get(el.campoInventoryName).should('not.exist')
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoLogout).click()
    }
    acessarDetalhes(){
        cy.get(el.cartBoldTshirt).click()
        cy.get(el.cart).click()
        cy.get(el.campoInventoryName).click()
        cy.get(el.campoDetalhe).should('exist')
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoLogout).click()
    }
    identificarComprador(){
        cy.get(el.cartBackPack).click()
        cy.get(el.cartBoldTshirt).click()
        cy.get(el.cartBikeLight).click()
        cy.get(el.cart).click()
        cy.get(el.botaoCheckout).click()
        cy.get(el.titlePage).should('have.text', 'Checkout: Your Information')
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoLogout).click()
    }
    retornaCarrinho(){
        cy.get(el.cartBackPack).click()
        cy.get(el.cartBoldTshirt).click()
        cy.get(el.cartBikeLight).click()
        cy.get(el.cart).click()
        cy.get(el.botaoCheckout).click()
        cy.get(el.botaoCancelPageInfo).click()
        cy.get(el.titlePage).should('have.text', 'Your Cart')
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoLogout).click()
    }
    preencherCampos(){
        cy.get(el.cartBackPack).click()
        cy.get(el.cartBoldTshirt).click()
        cy.get(el.cartBikeLight).click()
        cy.get(el.cart).click()
        cy.get(el.botaoCheckout).click()
        cy.get(el.campoNome).type('Joe')
        cy.get(el.campoSobrenome).type('Pinetree')
        cy.get(el.campoCep).type('60147075')
        cy.get(el.botaoContinue).click()
        cy.get(el.titlePage).should('have.text', 'Checkout: Overview')
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoLogout).click()
    }
    cancelaCompra(){
        cy.get(el.cartBackPack).click()
        cy.get(el.cartBoldTshirt).click()
        cy.get(el.cartBikeLight).click()
        cy.get(el.cart).click()
        cy.get(el.botaoCheckout).click()
        cy.get(el.campoNome).type('Joe')
        cy.get(el.campoSobrenome).type('Pinetree')
        cy.get(el.campoCep).type('60147075')
        cy.get(el.botaoContinue).click()
        cy.get(el.botaoCancelPageCheckout).click()
        cy.get(el.titlePage).should('have.text', 'Products')   
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoLogout).click()
    }
    checkoutSemProdutos(){
        cy.get(el.cart).click()
        cy.get(el.botaoCheckout).click()
        cy.get(el.campoCarrinhoVazio).should('not.exist')
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoLogout).click()
    }
    acionarBotaoVoltar(){
        cy.get(el.cartBackPack).click()
        cy.get(el.cartBoldTshirt).click()
        cy.get(el.cartBikeLight).click()
        cy.get(el.cart).click()
        cy.get(el.botaoCheckout).click()
        cy.get(el.campoNome).type('Joe')
        cy.get(el.campoSobrenome).type('Pinetree')
        cy.get(el.campoCep).type('60147075')
        cy.get(el.botaoContinue).click()
        cy.get(el.botaoFinalizar).click()
        cy.get(el.botaoVoltar).click()
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoLogout).click()
    }
    zerarProdutosComReset(){
        cy.get(el.cartBackPack).click()
        cy.get(el.cartBoldTshirt).click()
        cy.get(el.cartBikeLight).click()
        cy.get(el.cart).click()
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoFechar).click()
        cy.get(el.cart).click()
        cy.get(el.campoCarrinhoVazio).should('not.exist')
        cy.get(el.botaoMenu).click()
        cy.get(el.botaoReset).click()
        cy.get(el.botaoLogout).click()
    }
}
export default new Page();