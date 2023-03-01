import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      marromEscuro: string
      marrom: string
      marromClaro: string
      begeEscuro: string
      bege: string
      azulEscuro: string
      azul: string
      azulClaro: string
      roxo: string
      vermelho: string
      laranja: string
      amarelo: string
      verde: string
      title: string
      cinza1: string
      cinza2: string
      cinza3: string
    }

    shadows: {
      primary: string
    }
  }
}
