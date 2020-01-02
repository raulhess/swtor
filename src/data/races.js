const races = {
    cerean: {
      label: "Cerean",
      subtitle: "-1 agilidade / +1 inteligência",
      description: `Os Cereanos são uma espécie de humanóides sofisticados e com um alto nível cultural do planeta Cerea
      na Orla Média. Todos os membros da espécie apresentam uma cabeça pontiaguda que carregav grandes cérebros binários
      que os permitem se concentrar em várias coisas ao mesmo tempo. Eles têm um físico semelhante ao dos humanos e
      possuem um coração extra que fornecia uma melhor circulação do sangue para alimentar seus dois cérebros.`,
      skills: "conhecimento, computação, concentração, medicina, percepção, pilotagem",
      ability: {
        name: 'Dois corações',
        type: 'Estratégica',
        descrição: `Uma vez por dia, se um ataque lhe reduziria a 0 ou menos de vida, ao invés disso fique com 1 de vida.
        Receba 1 ponto de cansaço.`
      }
    },
    human: {
      label: "Humano",
      subtitle: "nenhum bônus/penalidade de atributo",
      description: `Humano é uma espécie bípede com simetria bilateral nativa do planeta Coruscant.
      São normalmente encontrados espalhados pela galáxia, desde mundos como Naboo até lugares desérticos como Tatooine.
      Humanos são conhecidos por engajarem em diferentes atividades, como política e caça de recompensas.
      Algumas espécies que apresentam estrutura esquelética semelhante a dos humanos são apelidados de "humanoides".`,
      skills: "qualquer perícia",
      ability: {
        name: 'Versatilidade',
        type: 'Estratégica',
        descrição: `Uma vez por dia, você pode rerolar um teste de perícia ou atributo.`
      }
    },
    keldor: {
      label: "Kel Dor",
      subtitle: "-1 força / +1 sabedoria",
      description: `Os Kel Dors, alguns chamados de Kel Dorianos, são espécies vindas do planeta tecnológico de Dorin.
      Devido à Dorin ter uma atmosfera única, composta por hélio e gás único desse planeta, os Kel Dors são forçados a
      usar máscaras de respiração antiox e óculos de proteção quando estiverem em planetas com atmosfera de composição
      diferente. Esse equipamento protege eles do dióxido de carbono, nitrogênio e oxigênio que é fatal aos Kel Dors.`,
      skills: "atletismo, concentração, computação, força de vontade, medicina, sobrevivência",
      ability: {
        name: 'Constituição forte',
        type: 'Física',
        descrição: `Uma vez por dia, se um ataque for lhe causar dano físico, reduza o dano em 1d6 + seu nível.`
      }
    },
    miraluka: {
      label: "Miraluka",
      subtitle: "-1 agilidade / +1 sabedoria",
      description: `Os Miraluka são uma espécie humanóide sensitiva à Força , que diferem dos seres humanos por que eles
      não têm olhos, apenas mantendo órbitas vestigiais, e percebem o ambiente ao seu redor através de Força, em vez de
      visão normal. Esta visão é tão forte que, se uma Miraluka encarar um Jedi ou Sith, eles podem "ver" força radiando
      deles.`,
      skills: "concentração, força de vontade, intuição, percepção, persuasão, usar a força",
      ability: {
        name: 'Conexão com a força',
        type: 'Estratégica',
        descrição: `Uma vez por dia, se uma habilidade da força iria lhe causar cansaço, ignore o cansaço infligido por ela.`
      }
    },
    mirialan: {
      label: "Mirialan",
      subtitle: "+1 agilidade / -1 inteligência",
      description: `Os Mirialanos são uma espécie humanóide nativos do planeta Mirial. A aparência deles é muito similar
      à dos humanos, porém sua pele varia de uma cor verde-amarelada a peles mais pálidas. Eles são muito flexíveis e ágeis,
      tornando-os oponentes formidáveis em uma batalha direta. Os Mirialanos são muito religiosos e praticam um entendimento
      primitivo da Força. É de tradição os indivíduos dessa espécie colocarem uma tatuagem simétrica em seus rostos e mãos para
      mostrar que concluiram um determinado teste ou tarefa, ou que tenha atingido uma proficiência suficiente em uma certa
      habilidade. O número de tatuagens é um bom indicador para dizer o quão maturo ou/e eficiente o Mirialano é.`,
      skills: "atletismo, acrobacia, força de vontade, intuição, medicina, sobrevivência",
      ability: {
        name: 'Manobra acrobática',
        type: 'Física',
        descrição: `Uma vez por dia, você pode escolher entre receber vantagem em um ataque corpo a corpo, ou causar
        desvantagem em um ataque corpo a corpo de um inimigo contra você. Receba um ponto de cansaço.`
      }
    },
    nautolan: {
      label: "Nautolan",
      subtitle: "+1 força / -1 sabedoria",
      description: `Os Nautolanos, algumas vezes citados como Nautilóides, são uma espécie humanóide anfíbia do planeta
      Glee Anselm. Apesar de terem estabelecido assentamentos através de seu planeta natal aquático, a maior parte da
      civilização Nautolana pode ser achada na Região de Sabilon.`,
      skills: "atletismo, acrobacia, intuição, resistência, sobrevivência, trato animal",
      ability: {
        name: 'Liso',
        type: 'Física',
        descrição: `Uma vez por dia, antes de receber dano de um ataque, como uma reação você pode aumentar sua armadua
        em +5 até o final do turno.`
      }
    },
    togruta: {
      label: "Togruta",
      subtitle: "-1 força / +1 sabedoria",
      description: `Os Togrutas são uma espécie humanóide nativa do planeta Shili. Pode-se notar que os Togrutas,
      assim como os Twi'leks, possuem o lekku, um par de "caudas" na cabeça, talvez devido a uma ancestralidade comum
      entre ambas as raças. Togrutas também podem ser distinguidos por suas montrais, grandes projeções ocas de chifres que
      cresçem no alto de suas cabeças, que dá as espécies de uma forma de ecolocalização passiva.`,
      skills: "concentração, força de vontade, intuição, sobrevivência, percepção, trato animal",
      ability: {
        name: 'Sabedoria natural',
        type: 'Estratégica',
        descrição: `Uma vez por dia, você pode receber um bônus de +10 em algum teste de sabedoria.`
      }
    },
    twilek: {
      label: "Twi'lek",
      subtitle: "-1 sabedoria / +1 presença",
      description: `Twi'leks são uma espécie Senciente nativa do planeta Ryloth. São uma espécie alta e magra, com
      múltiplos pigmentos de pele incluindo rosa-claro, azul, laranja, e verde. A característica que define os Twi'leks
      são os tentáculos preênseis que crescem de seus crânios, chamados lekku. Fêmeas Twi'lek são conhecidas por sua beleza,
      o que leva muitas à uma vida de escravidão nas mãos dos ricos e poderosos da galáxia.`,
      skills: "agilidade, computação, conhecimento, furtividade, persuasão, pilotagem"
    },
    zabrak: {
      label: "Zabrak",
      subtitle: "+1 sabedoria / -1 presença",
      description: `Zabraks são uma espécie carnívora quase humana nativa do planeta de Iridonia. Suas espécies têm chifres
      distintivos em cima de suas cabeças e dois corações. Os Zabraks são considerados orgulhosos, autodeterminados e até
      arrogantes para alguns. Entretanto, são uma das espécies mais independentes da galáxia.`,
      skills: "atletismo, força de vontade, furtividade, intuição, resistência, sobrevivência"
    },
  }

  export { races }