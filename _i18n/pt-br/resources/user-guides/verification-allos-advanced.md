{% include disclaimer.html translated="yes" translationOutdated="no" %}

A verificação dos arquivos binários deve sempre ser feita antes de se
extrair, instalar e usar o software do Monero. Essa é a única maneira de
assegurar que você está usando o software oficial do Monero. Com esse guia
você aprenderá como não ser enganado a usar um programa falso do Monero que
você venha a baixar em um phishing, em um ataque hacker, etc.

Para proteger a integridade dos binários, a equipe Monero fornece uma lista
assinada criptograficamente contendo todos os hashes
[SHA256](https://pt.wikipedia.org/wiki/SHA-2) dos binários. Se o binário que
você baixou foi adulterado, ele irá produzir um [hash
diferente](https://pt.wikipedia.org/wiki/File_hashing) do que o hash
esperado para o arquivo.

Esse é um guia avançado para os sistemas operacionais Linux, Mac e Windows
e, portanto, você precisará saber como usar a linha de comando. Neste guia
você aprenderá como instalar o software necessário, como importar a chave de
assinatura, como baixar os arquivos necessários e como verificar se o seu
binário é autêntico.

## Índice:

1. [Instalar o GnuPG](#instalando-o-gnupg)

2. [Verificar & Importar a Chave de
   Assinatura](#verificar-e-importar-a-chave-de-assinatura)

3. [Baixar & Verificar o Arquivo de
   Hashes](#baixar-e-verificar-o-arquivo-de-hashes)

4. [Baixar & Verificar o Binário](#baixar-e-verificar-o-binário)

## Instalando o GnuPG

+ No Windows, vá para a [página de download do
Gpg4win](https://gpg4win.org/download.html) e siga as instruções para a
instalação.

+ No Mac, vá para a [página de download do Gpgtools](https://gpgtools.org/)
e siga as instruções para a instalação.

+ No Linux, o GnuPG já vem instalado por padrão.

## Verificar e Importar a Chave de Assinatura

Nessa seção você irá aprender como adquirir a chave de assinatura do Monero,
como certificar-se de que você baixou a chave correta e como importar a
chave para o GnuPG.

### Baixando a Chave de Assinatura

No Windows ou Mac, vá para a página com a [chave GPG do
binaryFate](https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc),
que ele usa para assinar os binários do Monero, e salve-a como um arquivo
`binaryfate.asc` em seu computador.

No Linux, você pode baixar a chave de assinatura do binaryFate através do
seguinte comando:

```
wget -O binaryfate.asc
https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc
```

### Verificando a Chave de Assinatura

Em todos os sistemas operacionais, verifique a impressão digital
(fingerprint) do arquivo `binaryfate.asc` executando o seguinte comando em
um terminal:

``` gpg --keyid-format long --with-fingerprint binaryfate.asc ```


Verifique se a impressão digital do seu arquivo corresponde à impressão
digital abaixo:

```
pub   rsa4096/F0AF4D462A0BDF92 2019-12-12 [SCEA]
      Key fingerprint = 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
uid                           binaryFate <binaryfate@getmonero.org>
```

Se a impressão digital **CORRESPONDE**, então você pode continuar.

Se a impressão digital **NÃO CORRESPONDE**, **NÃO CONTINUE** a
instalação. Delete o arquivo `binaryfate.asc` e volte para a [seção Baixar a
Chave de Assinatura](#baixando-a-chave-de-assinatura).

### Importando a Chave de Assinatura

Em um terminal, importe a chave de assinatura:

``` gpg --import binaryfate.asc ```

Se essa for a primeira vez que você estiver importando a chave, o resultado
será algo parecido com isso:

```
gpg: key F0AF4D462A0BDF92: 2 signatures not checked due to missing keys
gpg: key F0AF4D462A0BDF92: public key "binaryFate <binaryfate@getmonero.org>" imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
```

Se você já importou a chave anteriormente, o resultado será algo parecido
com isso:

```
gpg: key F0AF4D462A0BDF92: "binaryFate <binaryfate@getmonero.org>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

## Baixar e Verificar o Arquivo de Hashes

Nessa seção você irá aprender como baixar o arquivo de hashes e como
verificar a sua autenticidade.

### Baixar o Arquivo de Hashes

No Windows ou Mac, vá para a página com o [arquivo de hashes em
getmonero.org]({{ site.baseurl }}/downloads/hashes.txt) e salve-a como um
arquivo `hashes.txt` em seu computador.

No Linux, você pode baixar o arquivo com os hashes assinados através do
seguinte comando:

``` wget -O hashes.txt https://www.getmonero.org/downloads/hashes.txt ```

### Verificar o Arquivo de Hashes

O arquivo de hashes é assinado com a chave `81AC 591F E9C4 B65C 5806 AFC3
F0AF 4D46 2A0B DF92` conforme exibido no resultado abaixo.

Em todos os sistemas operacionais, a verificação da assinatura do arquivo de
hashes pode ser obtida em um terminal através do seguinte comando:

``` gpg --verify hashes.txt ```

Se o arquivo for autêntico, o resultado será algo parecido com isso:

```
gpg:                using RSA key 81AC591FE9C4B65C5806AFC3F0AF4D462A0BDF92
gpg: Good signature from "binaryFate <binaryfate@getmonero.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 81AC 591F E9C4 B65C 5806  AFC3 F0AF 4D46 2A0B DF92
```

Se o resultado exibir **Assinatura válida (Good signature)**, como no
exemplo, então você pode continuar.

Se o resultado exibir **Assinatura inválida (BAD signature)**, **NÃO
CONTINUE.** Delete o arquivo `hashes.txt` e volte para a [seção Baixar o
Arquivo de Hashes](#baixar-o-arquivo-de-hashes).

## Baixar e Verificar o Binário

Nessa seção você irá aprender como baixar o binário do Monero para o seu
sistema operacional, como obter o hash `SHA256` do arquivo binário que você
baixou e como verificar se ele está correto.

### Baixar o Binário do Monero

No Windows ou Mac, vá para [getmonero.org]({{ site.baseurl }}/downloads/) e
baixe o arquivo correto para o seu sistema operacional. Salve o arquivo em
seu computador. **Não extraia os arquivos ainda.**

No Linux, você pode baixar as ferramentas de linha de comando usando o
seguinte comando:

```
wget -O monero-linux-x64-v0.15.0.5.tar.bz2 https://downloads.getmonero.org/cli/linux64
```

### Verificação de Binário no Linux ou Mac

Os passos para o Linux e para o Mac são os mesmos. Em um terminal, obtenha o
hash `SHA256` do binário do Monero que você baixou. Como exemplo, esse guia
irá usar o binário do GUI para `Linux, 64bit`. Substitua
`monero-gui-linux-x64-v0.15.0.4.tar.bz2` com o nome do binário que você
baixou na [seção Baixar o Binário do Monero](#baixar-o-binário-do-monero).

```
shasum -a 256 monero-gui-linux-x64-v0.15.0.4.tar.bz2
```

O resultado será algo parecido com o exibido abaixo, mas será diferente para
cada arquivo binário. O hash `SHA256` do arquivo binário em seu computador
deve corresponder ao hash que está listado para o seu binário no arquivo
`hashes.txt`.

```
2d105c792b46ec03739d39aaa6db3801f268e074814ab26e3824435f954c6a1c 
monero-gui-linux-x64-v0.15.0.4.tar.bz2
```

Se o hash **CORRESPONDE**, então você pode prosseguir! Extraia os arquivos e
prossiga com a instalação.

Se o hash **NÃO CORRESPONDE**, **NÃO CONTINUE.** Delete o binário que você
baixou e volte para a [seção Baixar o Binário do
Monero](#baixar-o-binário-do-monero).

### Verificação do Binário no Windows

Em um terminal, obtenha o hash `SHA256` do binário do Monero que você
baixou. Como exemplo, esse guia irá usar o binário do GUI para `Windows,
64bit`. Substitua `monero-gui-win-x64-v0.15.0.4.zip` com o nome do binário
que você baixou na [seção Baixar o Binário do
Monero](#baixar-o-binário-do-monero).

``` certUtil -hashfile monero-gui-win-x64-v0.15.0.4.zip SHA256 ```

O resultado será algo parecido com o exibido abaixo, mas será diferente para
cada arquivo binário. O hash `SHA256` do arquivo binário em seu computador
deve corresponder ao hash que está listado para o seu binário no arquivo
`hashes.txt`.

```
SHA256 hash of file monero-gui-win-x64-v0.15.0.4.zip: 9b 61 fa 80 7c 66
eb e3 01 08 69 d1 fa 92 6f e0 33 a2 c8 2e 6e 66 0c a8 ac b7 5a 8f ba 02 48
a0 CertUtil: -hashfile command completed successfully.
```

Se o hash **CORRESPONDE**, então você pode prosseguir! Extraia os arquivos e
prossiga com a instalação.

Se o hash **NÃO CORRESPONDE**, **NÃO CONTINUE.** Delete o binário que você
baixou e volte para a [seção Baixar o Binário do
Monero](#baixar-o-binário-do-monero).
