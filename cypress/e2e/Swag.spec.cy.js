///<reference types="cypress"/>
import { afterEach } from "mocha";
import Page from "../support/Swag/SwagLabsPage";

describe('SwagLabs', () => {
  
    beforeEach(() => {
       cy.login()
    })

    it('Colocar produto no carrinho', () => {
        Page.produto();
    })

    it('Remover produto do carrinho', () => {
        Page.remover();
    })

    it('Acessar pagina de detalhes do produto', () => {
        Page.acessarDetalhes();
    })

    it('Acessar a página de identificar o comprador', () => {
        Page.acessarDetalhes();
    })

    it('Acessar novamente o carrinho clicando no botao -Cancel- na area de Checkout', () => {
        Page.retornaCarrinho();
    })

    it('Na area de Checkout: Overview preencher os campos e clicar no botao Continue', () => {
        Page.preencherCampos();
    })

    it('Na area de Checkout: Overview cancelar a compra clicando no botao Cancel', () => {
        Page.cancelaCompra();
    })

    it('Acionar o botao Checkout no Carrinho sem produtos', () => {
        Page.checkoutSemProdutos();
    })

    it('Ao finalizar a compra, acionar o botão Back Home deve retornar a pagina Products', () => {
        Page.acionarBotaoVoltar();
    })

    it('Zerar proutos do carrinho utilizando o Reset App State no menu do lado superior esquerdo', () => {
        Page.zerarProdutosComReset();
    })
   
})