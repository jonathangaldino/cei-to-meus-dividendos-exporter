# Exportador de transações para Meus Dividendos

> Uma forma fácil de importar suas transaçoes no Meus Dividendos.

## Sobre

O Canal Eletrônico do Investidor (CEI), da Brasil Bolsa Balcão (B3), mantém seus dados de investimentos. O portal permite realizar a exportação dos seus dados de transação, proventos e outros, em formato .pdf e .xlsx.

Para quem usa o site Meus Dividendos para obter insights sobre o portfolio, é necessário pegar esse arquivo .xlsx e converter para .csv, realizando algumas modificações, é claro.

Esse script realiza essas modificações para você e exporta um arquivo .csv, perfeito para usar como input na plataforma MD.

## Rodar script

```bash
$ npm run exec -- --file="<caminho par ao arquivo .xlsx>"
```

A saída do script é o arquivo `/output/output.csv`.
