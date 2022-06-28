// questão - fibonacci
function hasInFibonacciSequence() {
  if (document.querySelector("#number-fibonacci").value == "") {
    return alert("Insira um número");
  }
  const responseArea = document.querySelector("#fibonacci");

  const numeroDoUsuario = Number(
    document.querySelector("#number-fibonacci").value
  );

  let anterior = 1;
  let atual = 1;
  let proximo = 0;

  for (let i = 0; i <= numeroDoUsuario; i++) {
    if (numeroDoUsuario == atual) {
      return (responseArea.innerHTML = `<p>O número ${numeroDoUsuario} pertence à sequência de Fibonacci.</p>`);
    }
    proximo = atual + anterior;
    anterior = atual;
    atual = proximo;
  }

  responseArea.innerHTML = `<p>O número ${numeroDoUsuario} não pertence à sequência de Fibonacci.</p>`;
}

// questão - faturamento
const faturamentos = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

const faturamentoPorEstados = [
  {
    estado: "SP",
    faturamentoMensal: 67836.43,
  },
  {
    estado: "RJ",
    faturamentoMensal: 36678.66,
  },
  {
    estado: "MG",
    faturamentoMensal: 29229.88,
  },
  {
    estado: "ES",
    faturamentoMensal: 27165.48,
  },
  {
    estado: "Outros",
    faturamentoMensal: 19849.53,
  },
];

let mediaFaturamento = 0;
let maiorFaturamento = faturamentos[0].valor;
let menorFaturamento = faturamentos[0].valor;

function detalhesFaturamento() {
  const responseArea = document.querySelector("#faturamento");
  let media = 0;

  faturamentos.map(({ valor }) => {
    if (valor > 0) {
      if (valor > maiorFaturamento) {
        maiorFaturamento = valor;
      }

      if (valor < menorFaturamento) {
        menorFaturamento = valor;
      }

      media += valor;
    }
  });

  mediaFaturamento = (media / faturamentos.length).toFixed(2);

  responseArea.innerHTML = `
    <p>Faturamento Médio: R$${mediaFaturamento}</p>
    <p>Maior Faturamento: R$${maiorFaturamento.toFixed(2)}</p>
    <p>Menor Faturamento: R$${menorFaturamento.toFixed(2)}</p>
  `;
}

function detalhesFaturamentoPorEstado() {
  if (mediaFaturamento <= 0) {
    return alert("Execute primeiro o detalhes do faturamento");
  }

  const responseArea = document.querySelector("#faturamentoPorEstados");
  let faturamentoTotal = 0;

  faturamentoPorEstados.map(({ faturamentoMensal }) => {
    faturamentoTotal += faturamentoMensal;
  });

  faturamentoPorEstados.map(({ estado, faturamentoMensal }) => {
    responseArea.innerHTML += `
      <div class="cardFaturamentoEstado">
        <p>Estado: ${estado}</p>
        <p>
          Percentual de Representação: ${(
            (faturamentoMensal * 100) /
            faturamentoTotal
          ).toFixed(2)}%
        </p>
      </div>
    `;
  });
}
