export interface StanzaType {
  title?: '(estribilho)' | '(final)'
  lyric: string[]
}

export interface HymnType {
  id: string
  number: number
  title: string
  stanzas: StanzaType[]
}

export type HymnsType = HymnType[]

export const hymns: HymnsType = [
  {
    id: '1',
    number: 1,
    title: 'JESUS, O NOSSO VERDADEIRO AMIGO',
    stanzas: [
      {
        lyric: [
          'JESUS CRISTO É O NOSSO VERDADEIRO SALVADOR,',
          'SENHOR TODO-PODEROSO, SÁBIO, REDENTOR.',
          'CONFORTO E CORAGEM, O SENHOR DO AMOR NOS DÁ',
          'QUANDO SOMOS RODEADOS POR AFLIÇÕES.'
        ]
      },
      {
        lyric: [
          'JESUS CRISTO É O VERDADEIRO AMIGO DO AMOR.',
          'MESMO QUE OS NOSSOS AMIGOS SE AFASTEM DE NÓS,',
          'JAMAIS O SENHOR NOS DEIXARÁ;',
          'O SEU INFINITO AMOR NOS DERRAMARÁ'
        ]
      },
      {
        lyric: [
          'O SENHOR, QUE TEM NAS MÃOS O SINAL DOS CRAVOS,',
          'COM A SUA VOZ SUAVE VEM NOS INSTRUIR:',
          '“VÓS, ESTANDO AO MEU LADO, PAZ SEMPRE TEREIS;',
          'VINDE COMIGO HOJE TAMBÉM, AMADOS MEUS”.'
        ]
      },
      {
        lyric: [
          'JESUS CRISTO É O VERDADEIRO CORDEIRO DE DEUS,',
          'QUE MORREU CARREGANDO AS NOSSAS TRANSGRESSÕES;',
          'MAS, LOGO RESSUSCITOU, CONCLUINDO A SUA OBRA.',
          'LOUVEMOS AO SENHOR: ALELUIA!'
        ]
      },
      {
        lyric: [
          'DO NOSSO CORPO FEZ, O SENHOR, O SEU TEMPLO,',
          'E AGORA NOS PREPARA COMO SUA NOIVA,',
          'INSCREVENDO O NOSSO NOME NO LIVRO DA VIDA.',
          'POR TODA A ETERNIDADE, NOS AMARÁ.'
        ]
      }
    ]
  },
  {
    id: '2',
    number: 2,
    title: 'O CRIADOR',
    stanzas: [
      {
        lyric: [
          'Ó FUNDADOR DO UNIVERSO, NOSSO SENHOR!',
          'A NÓS, QUE PROCURAMOS CUMPRIR A TUA VONTADE,',
          'CONCEDE A FELICIDADE CELESTIAL;',
          'NÓS QUE SOMOS APENAS PÓ DA TERRA.'
        ]
      },
      {
        lyric: [
          'Ó CRIADOR DO UNIVERSO, NOSSO SENHOR!',
          'OS CÉUS E A TERRA, JUNTOS, LOUVAM AO SENHOR.',
          'TANTO AS MAIS BELAS MONTANHAS COMO OS LAGOS',
          'REFLETEM A IMAGEM DO REINO DE DEUS.'
        ]
      },
      {
        lyric: [
          'O SENHOR, QUE MORREU NA CRUZ, MAS RESSUSCITOU',
          'E SE ASSENTOU À DESTRA DO TRONO DE DEUS,',
          'NOS CRIOU À SUA SANTA SEMELHANÇA;',
          'NÓS QUE NÃO PASSAMOS DE VERMES AOS SEUS OLHOS.'
        ]
      },
      {
        lyric: [
          'AO REINO DA GLÓRIA CANTANDO IREMOS,',
          'TENDO COMO AMIGO O NOSSO SENHOR JESUS:',
          'O SENHOR SANTO, PURO E MAJESTOSO;',
          'O SENHOR QUE É O PRINCÍPIO E TAMBÉM O FIM.'
        ]
      }
    ]
  },
  {
    id: '4',
    number: 4,
    title: 'PENTECOSTES',
    stanzas: [
      {
        lyric: [
          'NO DIA DE PENTECOSTES, OS DISCÍPULOS',
          'ADORAVAM AO SENHOR DA RESSURREIÇÃO:',
          '"ALELUIA! ALELUIA! Ó MEU SENHOR!".',
          'ESPERAVAM O PROMETIDO ESPÍRITO SANTO.'
        ]
      },
      {
        lyric: [
          'ENTÃO SE ABRIU O CÉU E O ESPÍRITO ',
          'SOBRE ELES VEIO DESCENDO COMO FOGO:',
          '“ALELUIA! ALELUIA! Ó MEU SENHOR!”.',
          'ATRAVÉS DO DOM DE LÍNGUAS, LOUVAVAM AO SENHOR.'
        ]
      },
      {
        lyric: [
          'REBELARAM-SE CONTRA O SENHOR, OS FILHOS DE ISRAEL.',
          'DESPREZARAM A ARCA DE DEUS, DA ALIANÇA,',
          'VIVENDO ATORMENTADOS, SENDO PERSEGUIDOS',
          'POR TEMORES, DESVENTURAS E TAMBÉM AFLIÇÕES.'
        ]
      },
      {
        lyric: [
          'CONFIAI NO SENHOR, VÓS QUE SOIS DE DEUS!',
          'ONTEM E HOJE É O MESMO SENHOR: CRISTO JESUS.',
          'COM O SEU SANGUE SAGRADO NOS PURIFICOU,',
          'LIVRANDO-NOS DAS ENFERMIDADES E DAS AFLIÇÕES.'
        ]
      },
      {
        lyric: [
          'VÓS, OS QUE PERDIDOS ESTAIS, VINDE AO SENHOR!',
          'ESPERANDO-VOS AINDA ESTÁ, DERRAMANDO SEU SANGUE.',
          '“ALELUIA! ALELUIA! Ó MEU SENHOR!”',
          'E ALEGRIA RECEBEI PELO ESPÍRITO SANTO.'
        ]
      }
    ]
  },
  {
    id: '5',
    number: 5,
    title: 'O NASCIMENTO DO SENHOR',
    stanzas: [
      {
        lyric: [
          'A GLÓRIA PARA SEMPRE RESPLANDECERÁ.',
          'O SUNTUOSO REINO DE DEUS PRÓXIMO ESTÁ.',
          'OS ANJOS LOUVARAM AO NOSSO SENHOR',
          'E OS SÁBIOS, TRIBUTOS DERAM AO SENHOR.'
        ]
      },
      {
        lyric: [
          'VEIO DA DESCENDÊNCIA DO REI DAVI',
          'O NOSSO DEUS, CRISTO, QUE AQUI NASCEU.',
          'OS CAMPOS DA JUDEIA REFULGINDO ESTÃO,',
          'E O EVANGELHO DA PAZ JÁ SE PODE OUVIR.'
        ]
      },
      {
        lyric: [
          'OLHANDO PARA O CÉU RESPLANDECENTE,',
          'VEEM-SE OS ANJOS LOUVANDO AO MENINO JESUS.',
          'CANTAI PARA QUE HAJA GLÓRIA A DEUS,',
          'CANTAI PARA QUE HAJA GRAÇA AOS HOMENS.'
        ]
      },
      {
        lyric: [
          'CANTAI E LOUVAI AO SENHOR DEUS,',
          'PODEROSO E SÁBIO SENHOR, SALVADOR.',
          'Ó FILHOS DOS HOMENS, LOUVAI AO SENHOR:',
          'AO SENHOR JESUS CRISTO, QUE VEIO DO CÉU.'
        ]
      }
    ]
  },
  {
    id: '6',
    number: 6,
    title: 'A BOA-NOVA DE GRANDE ALEGRIA',
    stanzas: [
      {
        lyric: [
          'NAS VIGÍLIAS DA NOITE, NOS CAMPOS DA JUDEIA,',
          'VIVIAM OS PASTORES, GUARDANDO O SEU REBANHO.',
          'A GLÓRIA DO SENHOR BRILHOU AO REDOR,',
          'E COM GRANDE TEMOR DIRIGIRAM-SE A BELÉM.'
        ]
      },
      {
        lyric: [
          'LEMBRANDO-SE DAS PALAVRAS E OLHANDO PARA OS CÉUS,',
          'A ESTRELA BRILHAVA, ANUNCIANDO A SUA VINDA:',
          '"UM FILHO SE NOS DEU, UM MENINO NOS NASCEU".',
          'MARAVILHADOS COM O FATO, DIVULGARAM O SENHOR.'
        ]
      },
      {
        lyric: [
          'DEITADO NA MANJEDOURA, NA CIDADE DE BELÉM,',
          'NOS NASCEU O SENHOR, O CRISTO SALVADOR.',
          '“GLÓRIA A DEUS NAS ALTURAS E NA TERRA MUITA PAZ!”,',
          'A MILÍCIA CELESTIAL LOUVAVA AO CRIADOR.'
        ]
      },
      {
        lyric: [
          'OS COXOS SE LEVANTARAM E OS CEGOS PASSARAM A VER,',
          'AOS FATIGADOS DEU-SE ALÍVIO E MUITA PAZ.',
          'INDO E RESGATANDO AS OVELHAS PERDIDAS,',
          'SELANDO OS HERDEIROS DO REINO DE DEUS.'
        ]
      }
    ]
  },
  {
    id: '7',
    number: 7,
    title: 'GETSÊMANI',
    stanzas: [
      {
        lyric: [
          'AH, AH! AH, AH! JÁ À VISTA ESTÁ O JARDIM DE GETSÊMANI, ',
          'QUE ANOITECE EM LÁGRIMAS.',
          'NO CORDEIRO DE DEUS, SUOR DE SANGUE JÁ SE VÊ:',
          '"PASSA DE MIM ESTE CÁLICE, MAS NÃO SEJA COMO QUERO EU;',
          'REALIZA, EM MIM, A TUA VONTADE".'
        ]
      },
      {
        lyric: [
          'AH, AH! O SENHOR AOS APÓSTOLOS DISSE: “ORAI SEM CESSAR',
          'PARA QUE NÃO ENTREIS EM TENTAÇÃO”.',
          'UM DOS DISCÍPULOS O TRAIU, ENTREGANDO O NOSSO SENHOR.',
          'NÃO HOUVE NEM SEQUER UM QUE ATÉ O FIM O PUDESSE AMAR E ACOMPANHAR;',
          'PORÉM, UM ANJO DE DEUS VEIO PARA O SERVIR.'
        ]
      },
      {
        lyric: [
          'AH, AH! QUEM É ESTE QUE AO CALVÁRIO VAI CARREGANDO',
          'A CRUZ NAS COSTAS?',
          'VEDE A COROA DE ESPINHOS E A MARCA DE AÇOITES.',
          'DEU ELE A SUA PRÓPRIA VIDA POR AMOR A TODOS NÓS.',
          'QUE FAREMOS NÓS, ENTÃO, PARA LHE RETRIBUIR?'
        ]
      }
    ]
  },
  {
    id: '8',
    number: 8,
    title: 'A PALAVRA DE DEUS É LÂMPADA PARA OS MEUS PÉS',
    stanzas: [
      {
        lyric: [
          'A PALAVRA DE DEUS É LÂMPADA PARA OS MEUS PÉS:',
          'QUANDO NUVENS DE TRISTEZAS VIEREM SOBRE MIM,',
          'QUANDO RIOS DE AFLIÇÕES TIVER QUE ATRAVESSAR,',
          'TORNA-SE FORÇA, TORNA-SE SABER',
          'E FAZ IRRADIAR A LUZ DA ESPERANÇA SOBRE MIM.'
        ]
      },
      {
        lyric: [
          'A PALAVRA DE DEUS É LÂMPADA PARA OS MEUS PÉS:',
          'QUANDO ESPINHOS COMEÇAREM A ENCOBRIR O MEU CAMINHO,',
          'QUANDO EU TIVER QUE SUBIR POR UMA LADEIRA,',
          'COM GRANDE AMOR IRÁ ME GUIAR.',
          'JAMAIS MUDARÁ A BRILHANTE ESTRELA DA MANHÃ.'
        ]
      },
      {
        lyric: [
          'A PALAVRA DE DEUS É LÂMPADA PARA OS MEUS PÉS:',
          'QUANDO VIER A TEMPESTADE E SE AGITAREM AS ONDAS,',
          'QUANDO TUDO ESCURO SE TORNAR E PERDIDO EU FICAR,',
          'ENVIANDO O SEU BARCO, VIRÁ ME SOCORRER',
          'PARA, COM O SENHOR, AO MEU DESTINO PODER CHEGAR.'
        ]
      }
    ]
  },
  {
    id: '9',
    number: 9,
    title: 'O DIA DO SENHOR ESTÁ PRÓXIMO',
    stanzas: [
      {
        lyric: [
          'COM ALEGRIA VAMOS SEMPRE PROSSEGUIR,',
          'CANTANDO, UNINDO AS VOZES.',
          'JESUS CRISTO SEMPRE ESTARÁ NOS GUIANDO,',
          'ELE É O NOSSO SENHOR!'
        ]
      },
      {
        title: '(estribilho)',
        lyric: [
          'CLAMAI LEVANTANDO A VOSSA VOZ E CANTAI!, CANTAI!,',
          'PROCLAMANDO QUE O DIA DO SENHOR JÁ ESTÁ PARA CHEGAR.'
        ]
      },
      {
        lyric: [
          'O PORTÃO DA SALVAÇÃO JÁ SE ABRIU.',
          'CANTAI ALELUIA!',
          'TODOS QUE CONFIAM NO NOME DE JESUS',
          'A VITÓRIA ALCANÇARÃO.'
        ]
      },
      {
        lyric: [
          'O PORTÃO DO HADES JÁ SE ABRIU.',
          'CANTAI ALELUIA!',
          'O AGUILHÃO DA MORTE DESAPARECEU,',
          'VINDE TODOS A COMPROVAR.'
        ]
      },
      {
        lyric: [
          'RECEBEMOS O SEU SANTO ESPÍRITO.',
          'CANTAI ALELUIA!',
          'JÁ É NOSSA A PROMESSA DO SENHOR:',
          'A ETERNA VIDA.'
        ]
      },
      {
        lyric: [
          'PREPAREMO-NOS! O NOSSO NOIVO',
          'JÁ ESTÁ PARA CHEGAR.',
          'VEM LOGO, Ó SENHOR JESUS!',
          'O NOSSO AZEITE JÁ ESTÁ AQUI.'
        ]
      }
    ]
  },
  {
    id: '10',
    number: 10,
    title: 'OUVE, Ó POVO ESCOLHIDO!',
    stanzas: [
      {
        lyric: [
          'OUVE, Ó POVO ESCOLHIDO:  ',
          'A TROMBETA DO FIM JÁ ESTÁ PARA TOCAR!',
          'JÁ VEM O SENHOR, ABALADO ESTÁ O MUNDO.',
          'SÃO OS PLANOS DO SENHOR: AS PROFECIAS DE DANIEL',
          'CUMPRINDO-SE ESTÃO. ESTREMEÇE E TEME. '
        ]
      },
      {
        lyric: [
          'OUVE, Ó POVO INCRÉDULO: ',
          'A TROMBETA DO FIM JÁ ESTÁ PARA TOCAR!',
          'O DIA VIRÁ COMO VEM UM SALTEADOR.',
          'DOS PLANOS DO SENHOR, NINGUÉM PODERÁ ESCAPAR.',
          'ANTES QUE SE FECHE A PORTA, VOLTA AO SENHOR. '
        ]
      },
      {
        lyric: [
          'COM AS FIGUEIRAS APRENDEI:  (plural: povo escolhido e incrédulo)',
          'QUANDO AS FOLHAS NOVAS COMEÇAREM A BROTAR,',
          'O SENHOR, JUIZ, SOBRE AS NUVENS VIRÁ.',
          'ESPANTAI-VOS E ESTREMECEI DESDE JÁ POR ESSE DIA,',
          'JÁ ESTAMOS NO FINAL DA ERA DA GRAÇA.'
        ]
      },
      {
        lyric: [
          'AS VOZES DE JÚBILO SERÃO',
          'OUVIDAS APENAS ENTRE OS SALVOS.',
          'O SENHOR CRIARÁ NOVO CÉU E NOVA TERRA,',
          'O CORDEIRO IRÁ NO SEU TRONO SE ASSENTAR',
          'E OS REBELDES SERÃO FINALMENTE DESTRUÍDOS.'
        ]
      },
      {
        lyric: [
          'VEDE: DOS CÉUS, DO LADO ORIENTAL,',
          'O SOL DA JUSTIÇA RAIANDO ESTÁ.',
          'MUITO EM BREVE SERÃO EXTINTAS AS TREVAS.',
          'VINDO O SANTO ESPÍRITO, VIDA AOS HOMENS DARÁ',
          'E A CANTAR VIVERÃO OS HERDEIROS DO REINO.'
        ]
      }
    ]
  },
  {
    id: '11',
    number: 11,
    title: 'O FIM DOS TEMPOS',
    stanzas: [
      {
        lyric: ['O FIM SE APROXIMA, O FIM ESTÁ PARA VIR.', 'O SATANÁS SE ESFORÇA PARA NOS SEDUZIR.']
      },
      {
        title: '(estribilho)',
        lyric: [
          'O FIM ESTÁ PARA VIR! O FIM ESTÁ PARA VIR!',
          'TU ESTÁS PREPARADO?',
          'O FIM ESTÁ PARA VIR! TU ESTÁS PREPARADO?'
        ]
      },
      {
        lyric: ['O FIM SE APROXIMA, O FIM ESTÁ PARA VIR.', 'UM REINO CONTRA O OUTRO: OS HOMENS PELEJARÃO.']
      },
      {
        lyric: ['ASSIM DIZ O SENHOR: "ESSE DIA EM BREVE VEM', 'E OS ESCOLHIDOS SERÃO REUNIDOS NESSE DIA".']
      },
      {
        lyric: [
          'CHEGANDO O SENHOR, AS NÉSCIAS SE LEVANTARAM,',
          'MAS AS LÂMPADAS NÃO SE ACENDERAM E CHORARAM NA ESCURIDÃO.'
        ]
      },
      {
        lyric: ['AS PRUDENTES, PREPARADAS, ESPERAVAM PELO SENHOR.', 'CHEGANDO O SENHOR, PARA AS BODAS TODAS ENTRARAM.']
      }
    ]
  },
  {
    id: '12',
    number: 12,
    title: 'MENSAGEM ATRAVÉS DO DOM DE LÍNGUAS',
    stanzas: [
      {
        lyric: [
          'DESPERTAI! DESPERTAI! DESPERTAI!',
          'DESPERTAI! DESPERTAI! DESPERTAI!',
          'É HORA! AGORA É HORA DE VOS DESPERTARDES DO SONO!',
          'DESPERTAI-VOS TODOS, O DIA ESTÁ PARA VIR.',
          'VAI ALTA A NOITE E VEM CHEGANDO O DIA.'
        ]
      },
      {
        lyric: [
          '(estribilho)',
          'VAI ALTA A NOITE E O DIA ESTÁ PARA VIR.',
          'DESPERTAI! DESPERTAI! O TEMPO ESTÁ SE ESGOTANDO!'
        ]
      },
      {
        lyric: [
          'DESPERTAI! DESPERTAI! DESPERTAI!',
          'DESPERTAI! DESPERTAI! DESPERTAI!',
          'OS VIGIAS ESTÃO CLAMANDO: "DESPERTAI-VOS DO PROFUNDO SONO!".',
          '“VÓS, OS QUE NO HADES ESTAIS, VOSSAS CABEÇAS LEVANTAI!”,',
          'O ETERNO REI, O SENHOR JESUS, BRADANDO ESTÁ.'
        ]
      },
      {
        lyric: [
          'DESPERTAI! DESPERTAI! DESPERTAI!',
          'DESPERTAI! DESPERTAI! DESPERTAI!',
          'VEDE QUE AS VIRGENS PRUDENTES ESTAVAM PREPARADAS.',
          'EM BREVE VIRÁ O SENHOR CRISTO JESUS;',
          'BEM ACORDADOS, VIGIANDO, ESPERAI!'
        ]
      }
    ]
  },
  {
    id: '13',
    number: 13,
    title: 'DIIZ-AWEIY',
    stanzas: [
      {
        lyric: [
          'DIIZ-AWEY, DIIZ-AWEY,',
          'DIIZ-AWEY, DIIZ-AWEY.',
          'OS ÚLTIMOS DIAS TENEBROSOS SERÃO:',
          'O SOL SE CONVERTERÁ EM TREVAS',
          'E A LUA, EM SANGUE;',
          'OS REIS NAS ROCHAS SE ESCONDERÃO;',
          'AS VIRGENS SOBRE A TERRA PRANTEARÃO;',
          'GRANDES ONDAS OS MONTES VARRERÃO; ',
          'E MUITOS, ENLOUQUECENDO, MORRERÃO.',
          'DIIZ-AWEY, DIIZ-AWEY.',
          'ALELUIA! O SENHOR VIVE!',
          '"PASSARÁ O CÉU E A TERRA,',
          'O MUNDO SE ESCURECERÁ,',
          'O SOL PERDERÁ O SEU BRILHO,',
          'PORÉM AS MINHAS PALAVRAS NÃO PASSARÃO."'
        ]
      }
    ]
  },
  {
    id: '14',
    number: 14,
    title: 'JERUSALÉM CELESTIAL',
    stanzas: [
      {
        lyric: [
          'JERUSALÉM, JERUSALÉM É A NOSSA NAÇÃO.',
          'JERUSALÉM, JERUSALÉM, CIDADE DE SIÃO.',
          'O NOSSO REI, SENHOR, DOS CÉUS DESCERÁ.',
          'AVANTE IREMOS ETERNAMENTE, CANTANDO AO SENHOR.',
          'SANTÍSSIMA, SANTÍSSIMA É A NOSSA NAÇÃO;',
          'SANTÍSSIMA, SANTÍSSIMA CIDADE DO SENHOR.'
        ]
      },
      {
        lyric: ['(estribilho)', 'A VOZ DOS QUE CANTAM ALELUIA', 'VAI SUBINDO AO CÉU, AO TRONO DE DEUS.']
      },
      {
        lyric: [
          'VIBRANDO IRÁ ATÉ OS CONFINS DO MUNDO',
          'O EVANGELHO QUE JESUS NOS ANUNCIOU:',
          'O BATISMO NO SEU SAGRADO NOME.',
          'ARDE NO NOSSO CORAÇÃO O ESPÍRITO SANTO.',
          'SE O ROCHEDO, CRISTO, EM NÓS ESTIVER,',
          'AS NOSSAS PALAVRAS TAMBÉM LOUVAM AO SENHOR.'
        ]
      },
      {
        lyric: [
          'A VINDA DO SENHOR JESUS PRÓXIMA JÁ ESTÁ.',
          'PREPARADOS JÁ ESTAIS, MEUS AMADOS IRMÃOS?',
          'JÁ SOBRE AS NUVENS ESTÃO OS SEUS ANJOS.',
          'COMO RELÂMPAGO VIRÁ O NOSSO SENHOR JESUS.',
          'PREPARAI-VOS, PREPARAI-VOS PARA ESSE GRANDE DIA.',
          'DISPONDO-VOS DO AZEITE, ESPERAI PELO SENHOR.'
        ]
      }
    ]
  },
  {
    id: '15',
    number: 15,
    title: 'O ANO DO JUBILEU',
    stanzas: [
      {
        lyric: [
          'CELEBRAI UNINDO A NAÇÃO: VEM O ANO DO JUBILEU!',
          'REGOZIJAI, Ó FILHOS DE DEUS, VEM DESCENDO SOBRE VÓS O ESPÍRITO SANTO.',
          'RESPLANDECE NO ALTO DO MONTE SIÃO',
          'O REINO REPLETO DE PODER E DE SABEDORIA.'
        ]
      },
      {
        lyric: [
          'ASSEMELHAM-SE À NOIVA DE CRISTO, OS CEDROS DO LÍBANO,',
          'QUE PERFUMAM OS MONTES NAS SERENAS NOITES DE LUAR.',
          'OUVEM-SE ANIMADOS HINOS DE LOUVOR',
          'NO LEITO DO MANANCIAL EM QUE CORREM SUAVEMENTE ÁGUAS PURAS.'
        ]
      },
      {
        lyric: [
          'ILUMINADA ESTÁ JERUSALÉM PELO FULGOR DOS RAIOS DA MANHÃ.',
          'CANTAM TODOS: "SÓ O SENHOR JESUS CRISTO É O NOSSO REI!".',
          'COM CORAGEM, LUTAI CONTRA OS PECADOS DO MUNDO,',
          'SEGUINDO OS PASSOS DO SENHOR QUE VENCEU NA CRUZ.'
        ]
      },
      {
        lyric: [
          'ALELUIA! EM VOZ ALTA LOUVAI AO SENHOR DOS EXÉRCITOS:',
          'O SEU NOME É MARAVILHOSO CONSELHEIRO, DEUS FORTE E PRÍNCIPE DA PAZ.',
          'OS CANSADOS RECEBERÃO O DESCANSO DO SENHOR',
          'E OS FRACOS SUBIRÃO COM ASAS, COMO AS ÁGUIAS NO CÉU.'
        ]
      },
      {
        lyric: [
          'CHEGANDO O REINO DOS MIL ANOS, A IGREJA, NOIVA DE CRISTO, ',
          'JUNTO COM OS ANJOS DE DEUS, DELEITAR-SE-Á NAS BODAS DO CÉU.',
          'CANTAI A INFINITA GRAÇA DO SENHOR;',
          'BENDIZEI TODOS OS POVOS: ALELUIA! BRADAI TODOS VÓS.'
        ]
      }
    ]
  },
  {
    id: '16',
    number: 16,
    title: 'DISPÕE-TE, RESPLANDECE! ',
    stanzas: [
      {
        lyric: [
          'DISPÕE-TE, RESPLANDECE! ',
          'A GLÓRIA DO SENHOR ESTÁ NASCENDO SOBRE TI.',
          'ATRAVESSANDO MARES, OS TEUS FILHOS ESTÃO CHEGANDO;',
          'TODOS VÊM TER CONTIGO TRAZENDO INCENSO E OURO PARA OFERECER. ',
          'OS NAVIOS DE TÁRSIS, CARREGADOS DE TESOUROS, ',
          'VÊM DAR GLÓRIA AO NOME DO SENHOR JESUS.'
        ]
      },
      {
        lyric: [
          'BENDIZEI O NOME DO SENHOR:',
          'VEM O ADVENTO DO SENHOR DOS EXÉRCITOS.',
          'TODOS OS TEUS FILHOS CATIVOS SERÃO LIBERTADOS',
          'E AS OVELHAS DE QUEDAR SERÃO REUNIDAS EM REBANHO NA PRESENÇA DE JESUS. ',
          'OS PASTORES DE OVELHAS DIRIGEM-SE PARA',
          'A JERUSALÉM CELESTIAL, O GRANDE MANANCIAL.'
        ]
      },
      {
        lyric: [
          'CANTAI! CANTAI EM ALTA VOZ',
          'SOB A BANDEIRA DO SENHOR DA VITÓRIA.',
          'LOGO, QUANDO COMEÇAR O REINO DOS MIL ANOS,',
          'TODOS NÓS NOS REUNIREMOS NA PRESENÇA DO SANTO REI PARA JULGAR O MUNDO. ',
          'CORRERÃO RIOS DE LOUVOR, QUE TRANSBORDARÃO DO CORAÇÃO,',
          'E FLUIRÁ A ALEGRIA DE JERUSALÉM.'
        ]
      },
      {
        lyric: [
          'BRADAI O SALMO ESPIRITUAL.',
          'A BANDEIRA DA OBRA DO SENHOR NA CRUZ FOI HASTEADA:',
          'O CAMINHO DA SALVAÇÃO E DO PERDÃO DOS PECADOS',
          'ABRE-SE AQUI NESTE LUGAR E, COMO NO TEMPO DOS APÓSTOLOS, VEM O ESPÍRITO SANTO. ',
          'A PAZ NO CORAÇÃO E A LUZ QUE ARDE EM AMOR',
          'RESPLANDECEM COM INTENSIDADE COMO O FULGOR DO SOL.'
        ]
      }
    ]
  },
  {
    id: '18',
    number: 18,
    title: 'A NOSSA IGREJA',
    stanzas: [
      {
        lyric: [
          'TANTO ONTEM COMO HOJE, IMUTAVELMENTE,',
          'OUVEM-SE AS VOZES DOS QUE SEGUEM AO SENHOR.',
          'NOS GALHOS DAS ÁRVORES, CANTAM OS PARDAIS:',
          'NÓS SOMOS OS PARDAIS DO REINO DOS CÉUS.'
        ]
      },
      {
        lyric: [
          'NAS SERENAS ÁGUAS DO MANANCIAL,',
          'OS PARDAIS VÊM SE BANHAR E DESCANSAR.',
          'O ROSTO SANTO REFLETE-SE AQUI:',
          'O ROSTO DO COMPASSIVO DEUS SALVADOR.'
        ]
      },
      {
        lyric: [
          'DESANUVIANDO-SE O MONTE CALVÁRIO,',
          'AO ALTO VÊ-SE A CRUZ DO SENHOR JESUS.',
          'SOPRA ALI O VENTO DO ESPÍRITO SANTO,',
          'TRANSMITINDO A PALAVRA DA GRAÇA AO MUNDO.'
        ]
      },
      {
        lyric: [
          'AGINDO O SENHOR, QUEM O IMPEDIRÁ?',
          'ERGUE-SE A CASA SAGRADA NO SANTO LUGAR,',
          'ONDE ACONTECEM PRODÍGIOS E SINAIS',
          'ATRAVÉS DO ESPÍRITO DO SENHOR JESUS.'
        ]
      },
      {
        lyric: [
          'DIARIAMENTE OBTERÃO A GRAÇA DO SENHOR',
          'OS QUE AOS SÁBADOS VÊM LOUVAR A DEUS.',
          'COMO AS OLIVEIRAS DESENVOLVER-SE-ÃO',
          'E COM OS SEUS PAIS ALEGRAR-SE-ÃO.'
        ]
      },
      {
        title: '(final)',
        lyric: [
          'CANTAI! CANTAI ESTA SALVAÇÃO!',
          'A ÁGUA É DO RIO DA VIDA: A FONTE DA VIDA.',
          'RECEBEI! RECEBEI ESTA SALVAÇÃO!',
          'A ÁGUA É ÁGUA DA VIDA: É O SANGUE DE JESUS.'
        ]
      }
    ]
  },
  {
    id: '19',
    number: 19,
    title: 'A IGREJA IESU NO MITAMA KYOKAI',
    stanzas: [
      {
        lyric: [
          'DESDE OS TEMPOS REMOTOS DA ANTIGUIDADE,',
          'HAVIA UM POVO ESCOLHIDO POR DEUS.',
          'JAMAIS SE ENVELHECEU A SUA VESTE NO DESERTO,',
          'NEM CANSAÇO LHE SOBREVEIO, E SEGUIU A CANAÃ.'
        ]
      },
      {
        lyric: [
          'QUANDO O POVO DE ISRAEL PASSOU PELO MAR VERMELHO, ',
          'EXULTOU AO VER A TROPA INIMIGA DESTRUÍDA.',
          'COLHIA, DIARIAMENTE, O MANÁ QUE VINHA DO CÉU',
          'E DA ROCHA BEBIA A ÁGUA DA VIDA.'
        ]
      },
      {
        lyric: [
          'A COLUNA DE NUVEM E A COLUNA DE FOGO',
          'PRECEDIAM O POVO, GUIANDO-O PELO DESERTO.',
          'MOISÉS ENCOBRIU O SEU ROSTO COM UM VÉU.',
          'NÓS NOS ENCONTRAREMOS COM O SENHOR SOBRE O SIÃO.'
        ]
      },
      {
        lyric: [
          'O SENHOR JESUS É NOSSO DEUS DA SALVAÇÃO.',
          'O LIVRO DA LEI ESTÁ NA SUA CRUZ.',
          'RECEBERAM O SANTO ESPÍRITO OS VELHOS E OS JOVENS:',
          'É O DESÍGNIO DO SENHOR, REPLETO DE GRAÇA.'
        ]
      },
      {
        lyric: [
          'DO NASCENTE DO SOL VEM ARDENDO A CHAMA:',
          'VEM SURGINDO A IGREJA DO ESPÍRITO SANTO.',
          'CONHECENDO O VERDADEIRO SENHOR, BÊNÇÃO TEREIS',
          'E VEREIS A GLÓRIA DE DEUS RESPLANDECENDO.'
        ]
      },
      {
        lyric: [
          'PURIFICADA É A ÁGUA EM NOME DE JESUS;',
          'O SANGUE É DERRAMADO E O PECADO, PERDOADO.',
          'PRODÍGIOS E SINAIS TESTIFICAM O ESPÍRITO.',
          'ESPERAMOS PELO DIA DA NOSSA REDENÇÃO.'
        ]
      }
    ]
  },
  {
    id: '20',
    number: 20,
    title: 'UM JARDIM DE SALMOS ',
    stanzas: [
      {
        lyric: [
          'UM JARDIM DE SALMOS NOS FOI CONCEDIDO PELO SENHOR.',
          'AINDA AS FLORES NÃO DESABROCHARAM, MAS HÁ MUITOS BOTÕES.',
          'SEM DONOS E NEM QUEM AS CUIDE, FRONDOSAS ESTÃO;',
          'AS FOLHAS DOS CRIS NTEMOS FRONDOSAS ESTÃO.'
        ]
      },
      {
        title: '(estribilho)',
        lyric: [
          'NÃO NEGLIGENCIEIS NOS CUIDADOS, APRESSADOS TRABALHAI!',
          'POIS QUANDO SE ABRIREM AS FLORES, VIRÁ, ENTÃO, O SENHOR.'
        ]
      },
      {
        lyric: [
          'POR SER UM JARDIM DE FLORES CONCEDIDO PELO SENHOR,',
          'COM ALEGRIA VAMOS TRABALHAR, LOUVANDO A JESUS.',
          'NADA PODERÁ SE COMPARAR AO JARDIM DE DEUS.',
          'AO LUTARMOS COM PERSEVERANÇA, ABENÇOADOS SEREMOS.'
        ]
      },
      {
        lyric: [
          'HAVERÁ UMA GRANDE FESTA QUANDO AS FLORES SE ABRIREM;',
          'COM OS ANJOS CANTAREMOS, ALELUIA!,  A JESUS.   (Dessa forma a palavra Aleluia coincide com o japonês)',
          'COM AMOR CELEBRAREMOS A VINDA DO SENHOR.',
          'AO NOSSO SENHOR JESUS RECEBEREMOS AQUI.'
        ]
      }
    ]
  },
  {
    id: '23',
    number: 23,
    title: 'HINO DE CONSAGRAÇÃO',
    stanzas: [
      {
        lyric: [
          'CANTAI! CANTAI AO NOSSO SENHOR!',
          'NENHUMA DAS SUAS PALAVRAS JAMAIS FALHARÁ.',
          'QUEM PODERÁ IMPEDIR A VONTADE DO SENHOR?',
          'O SENHOR INICIA E FAZ SE CONCLUIR.'
        ]
      },
      {
        lyric: [
          'LOUVAI! LOUVAI O NOME DE JESUS!',
          'A VERDADE E A MISERICÓRDIA JAMAIS FALTARÃO.',
          'QUEM PODERÁ IMPEDIR A VONTADE DO SENHOR?',
          'EDIFICOU-SE AQUI, HOJE, A CASA DE DEUS.'
        ]
      },
      {
        lyric: [
          'VIBRAI! VIBRAI! O ESPÍRITO RECEBESTES!',
          'FAZEI VIBRAR O CORAÇÃO LAVADO COM O SANGUE.',
          'QUEM PODERÁ IMPEDIR A VONTADE DO SENHOR',
          'DE FAZER O QUE JAMAIS SE VIU OU SE OUVIU?'
        ]
      },
      {
        lyric: [
          'CANTAI GLÓRIA! BRADAI ALELUIA!',
          'SELECIONADOS COMO O POVO SAGRADO DE DEUS,',
          'QUEM PODERÁ IMPEDIR A VONTADE DO SENHOR?',
          'NO MUNDO BRILHARÃO EM NOME DE JESUS.'
        ]
      },
      {
        lyric: [
          'IDE AVANTE, AGITANDO O LÁBARO DE DEUS,',
          'ILUMINANDO O MUNDO TENEBROSO E LEVANDO A ALEGRIA.',
          'TODA SORTE DE TESOUROS ENCHE A CASA DO SENHOR,',
          'TAL COMO O EVANGELHO DA ÁGUA E DO ESPÍRITO.'
        ]
      }
    ]
  },
  {
    id: '24',
    number: 24,
    title: 'REDENÇÃO',
    stanzas: [
      {
        lyric: [
          'JESUS MORREU NA CRUZ, FOI POR NÓS QUE ELE MORREU;',
          'JESUS MORREU NA CRUZ, MORREU AMANDO A NÓS.',
          'FOI PARA DAR A VIDA ETERNA PARA NÓS,',
          'SUBINDO PARA A GLÓRIA, APÓS NOS REDIMIR.'
        ]
      },
      {
        lyric: [
          'A COROA DE ESPINHOS, ELE SUPORTOU POR NÓS,',
          'E OS AÇOITES QUE ELE SOFREU FOI DEVIDO AO SEU AMOR,',
          'PARA MORADA NOS DAR LÁ NO REINO DOS CÉUS.',
          'ESSE ERA O DESÍGNIO JÁ DETERMINADO.'
        ]
      },
      {
        lyric: [
          'JESUS, PARTINDO O PÃO, AOS DISCÍPULOS O CEDEU,',
          'DIZENDO: "ISTO É O MEU CORPO; TOMAI E COMEI.',
          'PARA O DIA DA RESSURREIÇÃO, MINHA CARNE ISTO É.',
          'CADA UM TOME A SUA CRUZ E VENHA APÓS MIM".'
        ]
      },
      {
        lyric: [
          'JESUS, EM SUAS MÃOS, TOMANDO O CÁLICE,',
          'DISSE: “ISTO É O MEU SANGUE DERRAMADO POR VÓS.',
          'BEBEI DELE TODOS, EU VOS PERDOAREI;',
          'SACRIFÍCIO ETERNO SEREI PARA VOS REDIMIR”.'
        ]
      },
      {
        lyric: [
          'A ESPERANÇA NÃO ACABOU, JESUS RESSUSCITOU!',
          'PARA QUE A PROFECIA CUMPRIDA FOSSE,',
          'ENTREGUE ELE FOI PARA A MORTE NA CRUZ.',
          'MAS, AO TERCEIRO DIA, O SENHOR RESSUSCITOU.'
        ]
      }
    ]
  },
  {
    id: '25',
    number: 25,
    title: 'O CÁLICE DO SENHOR',
    stanzas: [
      {
        lyric: [
          'COMO É SAGRADO O SANGUE DO SENHOR,',
          'A FRAGR NCIA DO AMOR QUE NÃO TEM FIM,',
          'DERRAMADO SOBRE A CRUZ.',
          'AH! QUE SAGRADO REFLEXO DO AMOR!'
        ]
      },
      {
        lyric: [
          'ETERNAMENTE LOUVAR-TE-EMOS,',
          'POIS TU NOS TENS PERDOADO POR TODO.',
          'HAJA GLÓRIA NO TEU SANGUE SAGRADO!',
          'AH! QUE SAUDOSA FONTE DE AMOR!'
        ]
      },
      {
        lyric: [
          'SEGUINDO PELO CALVÁRIO E CARREGANDO',
          'SOBRE AS TUAS PRÓPRIAS COSTAS A CRUZ,',
          'LIBERTOS FOMOS DO JUGO DO PECADO.',
          'AH! QUE MISTERIOSA FONTE DE SANGUE SANTO!'
        ]
      },
      {
        lyric: [
          'AO LEVARMOS ATÉ O FIM A CRUZ QUE NOS CEDESTE,',
          'IR-NOS-EMOS ENCONTRAR COM O SENHOR.',
          'ETERNAMENTE LOUVAR-TE-EMOS',
          'E NO TEU SANTO BRAÇO DESCANSAREMOS EM PAZ.'
        ]
      }
    ]
  },
  {
    id: '26',
    number: 26,
    title: 'OFERTA',
    stanzas: [
      {
        lyric: [
          'OFERECEMOS-TE ESTE TESOURO,',
          'RECEBE NAS TUAS SAGRADAS MÃOS.',
          'PURIFICANDO-O, UTILIZA-O:',
          'É O NOSSO SINCERO E VERDADEIRO CORAÇÃO. '
        ]
      },
      {
        lyric: [
          'ESTA GRATIDÃO, COM MUITA ALEGRIA,',
          'OFERECEMOS-TE DE TODO O CORAÇÃO.',
          'PARA AS SAGRADAS OBRAS, UTILIZA-A,',
          'E A TUA GLÓRIA ETERNA FAZE RESPLANDECER.'
        ]
      },
      {
        lyric: [
          'OFERECENDO O NOSSO CORAÇÃO',
          'E FAZENDO-O ASCENDER ATÉ O SENHOR,',
          'A PORTA DO REINO ABERTA SERÁ',
          'E OUVIREMOS A VOZ DIVINA: "HAJA GRAÇA EM VÓS".'
        ]
      },
      {
        lyric: [
          'SOMOS AGORA HERDEIROS DE DEUS,',
          'SEMPRE AGIREMOS COM UM SÓ CORAÇÃO.',
          'À VONTADE DO SENHOR OBEDECENDO,',
          'PARA A ALEGRIA NUNCA NOS DEIXAR.'
        ]
      }
    ]
  },
  {
    id: '27',
    number: 27,
    title: 'CONSAGRAÇÃO DE UM(A) FILHO(A)',
    stanzas: [
      {
        lyric: [
          'DESDE A CRIAÇÃO, FOI ELEITO(A) POR DEUS',
          'E, ATENDENDO AO CHAMADO, NASCEU NO NOSSO LAR.',
          'POR TODA A ETERNIDADE CELEBREMOS ESTA ALEGRIA',
          'E, PERANTE O AMOR DO SENHOR, PROSTREMO-NOS.'
        ]
      },
      {
        lyric: [
          'CONSAGRANDO AO SENHOR O SEU FILHO ISAQUE,',
          'FOI CHAMADO, ABRAÃO, DE "O PAI DA FÉ".',
          'APRENDAMOS NÓS TAMBÉM COM OS SEUS ATOS DE FÉ,',
          'CONSAGRANDO O(A) NOSSO(A) FILHO(A) A DEUS.'
        ]
      },
      {
        lyric: [
          'A PARTIR DE HOJE, TODA A MINHA CASA',
          'IRÁ SE PROSTRAR PERANTE O SENHOR:',
          'APRENDENDO A PALAVRA, CUMPRINDO A VONTADE DE DEUS',
          'E FAZENDO PARTE DO POVO SANTO DO SENHOR.'
        ]
      },
      {
        lyric: [
          'SOBRE OS EDIFICADOS EM NOME DE JESUS,',
          'AS FORÇAS DO PECADO E OS CUIDADOS DO MUNDO',
          'NÃO TERÃO PODER: EM PAZ VIVERÃO',
          'E PROSPERARÃO COMO AS PLANTAS ÀS MARGENS DO RIO.'
        ]
      }
    ]
  },
  {
    id: '28',
    number: 28,
    title: 'O SENHOR DA SALVAÇÃO',
    stanzas: [
      {
        lyric: [
          'O ESPÍRITO SANTO POSSUI O PODER DE NOS CURAR.',
          'TANTO A NOSSA DOR CORPORAL QUANTO A SENTIMENTAL,',
          'COM MARAVILHOSO PODER IRÁ CURAR.',
          'ACREDITAI! ACREDITAI NO PODER DA SALVAÇÃO!'
        ]
      },
      {
        lyric: [
          'O ESPÍRITO SANTO POSSUI O PODER DE NOS CURAR.',
          'AO SERMOS PERSEGUIDOS PELAS ENFERMIDADES,',
          'IMPONDO AS SUAS MÃOS, O SENHOR IRÁ NOS CURAR.',
          'SUPLICAI! SUPLICAI UNGINDO COM AZEITE!'
        ]
      },
      {
        lyric: [
          'O PODER DE CURA ESTÁ NAS MÃOS DO NOSSO SENHOR JESUS;',
          'ORANDO EM NOME DE JESUS, NENHUM MAL RESISTIRÁ.',
          'ACREDITAI NO PODER DO NOME DE JESUS!',
          'RECORREI! RECORREI AO SENHOR DA VIDA!'
        ]
      },
      {
        lyric: [
          'OS CEGOS PASSAM A ENXERGAR; OS COXOS, A ANDAR;',
          'A FEBRE COMEÇA A BAIXAR; A MENINA VOLTA A VIVER:',
          'A FORÇA DO SENHOR CURA ATÉ DOENÇAS LETAIS.',
          'VEDE AS MARAVILHAS DO PODER DO SENHOR!'
        ]
      }
    ]
  },
  {
    id: '29',
    number: 29,
    title: 'A MARCHA DA CONGREGAÇÃO SAGRADA',
    stanzas: [
      {
        lyric: ['AQUI, NESTE LUGAR,', 'LOUVAMOS AO SENHOR!', 'NÓS SOMOS O SEU POVO, ', 'AS OVELHAS DO SEU REBANHO.']
      },
      {
        lyric: ['AQUI, NESTE LUGAR,', 'LOUVAMOS AO SENHOR!', 'NÓS SOMOS AS OVELHAS DO SEU PASTO.']
      },
      {
        lyric: ['ALELUIA! ALELUIA!', 'OH! GRANDIOSA SALVAÇÃO!']
      },
      {
        lyric: ['AQUI, NESTE LUGAR,', 'LOUVAMOS AO SENHOR!', 'NÓS SOMOS AS OVELHAS DO SEU PASTO.']
      }
    ]
  },
  {
    id: '30',
    number: 30,
    title: 'RECEBEI A SALVAÇÃO',
    stanzas: [
      {
        lyric: [
          'FELICIDADE HAJA NO REINO DE JESUS!',
          'ILUMINANDO ESTE MUNDO CHEIO DE PECADO,',
          'PARA SALVAR OS QUE CAMINHAM PARA A DESTRUIÇÃO,',
          'AGITAI A BANDEIRA DA OBRA DO SENHOR.'
        ]
      },
      {
        lyric: [
          'DAI LOUVORES AO NOME DO SENHOR JESUS!',
          'A OBRA DA SALVAÇÃO CUMPRINDO-SE ESTÁ.',
          'RECEBENDO O SANTO ESPÍRITO, SEGUIREMOS VENCENDO:',
          'A VITÓRIA PARA SEMPRE RESPLANDECERÁ.'
        ]
      },
      {
        lyric: [
          'BUSCAI A ÁGUA E O ESPÍRITO:',
          'PAZ HAVERÁ E AS PESSOAS, VIDA TERÃO.',
          'O VIGOR DE MIL TROPAS E DE DEZ MIL CORCÉIS',
          'RETUMBANDO IRÁ ATÉ OS CONFINS DO MUNDO.'
        ]
      }
    ]
  },
  {
    id: '31',
    number: 31,
    title: 'TRABALHEMOS CORAJOSAMENTE!',
    stanzas: [
      {
        lyric: [
          'TRABALHEMOS CORAJOSAMENTE, NÓS HERDEIROS DO REINO DOS CÉUS!',
          'SE O ESPÍRITO CONOSCO ESTIVER, SOMOS, ENTÃO, DO SENHOR.\t(我らは主のもの)',
          'A NOSSA FOICE AMOLEMOS E APRESSEMO-NOS PARA A CEIFA;',
          'APRESSEMO-NOS PARA O FIM, A SEARA JÁ PRODUZ.'
        ]
      },
      {
        lyric: [
          'BATALHEMOS CORAJOSAMENTE, NÓS SOLDADOS DO SENHOR!',
          'PRÓXIMO O DIA JÁ ESTÁ E A TROMBETA IRÁ TOCAR.',
          'VENÇAMOS LOUVANDO A DEUS, COMO GIDEÃO E OS TREZENTOS HOMENS.',
          'PREVALECER NÃO IRÁ O INFERNO SOBRE NÓS.'
        ]
      },
      {
        lyric: [
          'QUEM PODERÁ IMPEDIR A VONTADE DO NOSSO SENHOR?',
          'ATÉ O FORTE DE JERICÓ RUIU À VOZ DE LOUVOR.',
          'COMBATENDO O SATANÁS COM A ESPADA DO ESPÍRITO',
          'E ESTANDO COM O SENHOR, COM CERTEZA VENCEREMOS.'
        ]
      }
    ]
  },
  {
    id: '32',
    number: 32,
    title: 'Ó FILHA DE SIÃO!',
    stanzas: [
      {
        lyric: ['Ó FILHA DE SIÃO, VOLTA A JESUS!', 'O SENHOR QUE VENCEU O MUNDO ESPERANDO-TE ESTÁ.']
      },
      {
        title: '(estribilho)',
        lyric: ['AINDA HOJE O SENHOR CONTINUA A DERRAMAR', 'O SEU SANGUE DE REDENÇÃO PARA A VIDA NOS DAR.']
      },
      {
        lyric: ['Ó ESCOLHIDOS, VINDE PARA COMEMORAR!', 'SOB A TENDA SAGRADA, REUNI-VOS A CELEBRAR.']
      },
      {
        lyric: ['Ó AMADOS QUE FORAM CHAMADOS PELO SENHOR,', 'EM VERDADE E EM ESPÍRITO, VINDE LOUVAR A DEUS.']
      },
      {
        lyric: ['NAS HORAS DE AGONIAS OU NAS HORAS DE AFLIÇÕES,', 'O SENHOR SEMPRE POR PERTO ESTÁ PARA NOS CONSOLAR.']
      }
    ]
  },
  {
    id: '33',
    number: 33,
    title: 'VOLTAI, FILHOS MEUS!',
    stanzas: [
      {
        lyric: [
          'VOLTAI, FILHOS MEUS! VOLTAI, FILHOS MEUS!"',
          'COMO UM GRANDE MONTE É O AMOR DE DEUS:',
          'AO LEVANTARDES OS OLHOS, ALTO PODE PARECER;',
          'MAS, SE AO CIMO CHEGARDES, TODO O MUNDO VEREIS.'
        ]
      },
      {
        lyric: [
          'VOLTAI, FILHOS MEUS! VOLTAI, FILHOS MEUS!”',
          'COMO PROFUNDO MAR É O AMOR DE DEUS:',
          'AINDA QUE NA SUPERFÍCIE AS ONDAS ESTEJAM AGITADAS,',
          'NO FUNDO, OS CARDUMES ESTÃO NADANDO EM PAZ.'
        ]
      },
      {
        lyric: [
          'VOLTAI, FILHOS MEUS! VOLTAI, FILHOS MEUS!”',
          'NOS CÉUS SE VEEM AS AVES VOLTANDO AOS SEUS NINHOS,',
          'ATÉ O GADO RECONHECE O SEU PRÓPRIO CRIADOR.',
          'POR ONDE, AGORA, ANDAM OS FILHOS DOS HOMENS?'
        ]
      },
      {
        lyric: [
          'AS MÃOS COM CRAVOS ESTÃO ESTENDIDAS A VÓS.',
          'UM NOVILHO O SENHOR PREPARA A FESTEJAR,',
          'E UM ANEL, COMO SINAL DE HERDEIROS DO SEU REINO,',
          'PARA A ETERNA VIDA PODERDES USUFRUIR.'
        ]
      }
    ]
  },
  {
    id: '34',
    number: 34,
    title: 'AVANTE!',
    stanzas: [
      {
        lyric: [
          'AVANTE! AVANTE, SOLDADOS DO SENHOR!',
          'QUANDO O ESPÍRITO SANTO ABRIR O CAMINHO PARA VÓS,',
          'LUTAI COM BRAVURA, QUE O SOCORRO VIRÁ;',
          'ASSIM COMO JOSUÉ FEZ, APOIANDO-SE NA FÉ.'
        ]
      },
      {
        lyric: [
          'IDE TODOS COM BRAVURA, AMADOS IRMÃOS!',
          'SEGUINDO A PALAVRA DO NOSSO REDENTOR,',
          'VENCEI NA LIBERDADE DO ESPÍRITO SANTO,',
          'ABRINDO O CAMINHO ATÉ OS CONFINS DO MUNDO.'
        ]
      },
      {
        lyric: [
          'JÁ SE OUVE A VOZ DA VITÓRIA POR TODOS OS LADOS.',
          'A VOZ QUE SE OUVE É A VOZ DO ESPÍRITO,',
          'CHEIA DE ALEGRIA, GRAÇA E LOUVOR.',
          'A PRESENÇA DO SENHOR VAI RESPLANDECENDO.'
        ]
      }
    ]
  },
  {
    id: '35',
    number: 35,
    title: 'PREGAÇÃO',
    stanzas: [
      {
        lyric: ['CANTAI E REGOZIJAI! VEM O ESPÍRITO DO SENHOR!', 'O CAMINHO DA VIDA ABRE-SE NESTE LUGAR.']
      },
      {
        title: '(estribilho)',
        lyric: [
          'EM PÉ, EM PÉ, FILHOS DO SENHOR!',
          'OBEDECENDO-O, A VITÓRIA ALCANÇAI.',
          'AGITAI O LÁBARO DE DEUS,',
          'JÁ ESTÁ PRÓXIMA A VINDA DE JESUS.'
        ]
      },
      {
        lyric: [
          'JESUS CRISTO, QUE ESTÁ NO CÉU, SE FEZ FILHO DO HOMEM',
          'E, COMO CORDEIRO DE DEUS, VEIO REMOVER O PECADO DO MUNDO.'
        ]
      },
      {
        lyric: [
          'O SANGUE DERRAMADO NA CRUZ NOS LAVOU E NOS PURIFICOU,',
          'CONCEDENDO-NOS O SINAL DE LEGÍTIMOS FILHOS DE DEUS.'
        ]
      },
      {
        lyric: ['DO SEU SAGRADO REINO, O NOSSO DEUS, QUE RESSUSCITOU,', 'TEM DERRAMADO SOBRE NÓS O SEU SANTO ESPÍRITO.']
      },
      {
        lyric: ['O REBANHO SANTO DO SENHOR VEM MARCHANDO AQUI;', 'VÓS, OS ESCOLHIDOS DE DEUS, ACHEGAI-VOS TODOS AQUI!']
      }
    ]
  },
  {
    id: '36',
    number: 36,
    title: 'O EVANGELHO DA ÁGUA E DO ESPÍRITO',
    stanzas: [
      {
        lyric: [
          'Ó POVO SANTO DO REINO DE DEUS,',
          'ATRAVESSANDO AS ÁGUAS DO RIO JORDÃO',
          'E LAVANDO-TE NO SANGUE DO NOSSO SENHOR,',
          'ENTRARÁS ONDE NEM MOISÉS PÔDE ENTRAR.'
        ]
      },
      {
        lyric: [
          'ATRAVESSANDO VAMOS O RIO JORDÃO,',
          'COM FÉ, LOUVANDO A DEUS COMO JOSUÉ,',
          'PARA ONDE FOME E SEDE NÃO MAIS EXISTEM,',
          'A UMA TERRA QUE MANA LEITE E MEL.'
        ]
      },
      {
        lyric: [
          'O EVANGELHO DA ÁGUA E DO ESPÍRITO',
          'É O CAMINHO ETERNO QUE JAMAIS MUDARÁ.',
          'ENTREGANDO TUDO NAS MÃOS DO SENHOR',
          'E CANTANDO ALELUIA, PROSSEGUINDO IREMOS.'
        ]
      },
      {
        lyric: [
          'A COLUNA DE NUVEM SURGIA DE DIA',
          'E DE NOITE, A LUMINOSA COLUNA DE FOGO.',
          'TENDO EM MÃOS O CÁLICE DO ESPÍRITO SANTO,',
          'PELA ESTRADA DE SIÃO SEGUINDO IREMOS.'
        ]
      }
    ]
  },
  {
    id: '37',
    number: 37,
    title: 'A ALEGRIA AO RECEBER O ESPÍRITO SANTO',
    stanzas: [
      {
        lyric: [
          'NA MELODIA DO AMOR, QUE FLUI SERENAMENTE',
          'AO CONHECER O SENHOR, VIBRA O MEU CORAÇÃO.',
          'CANTEMOS ALELUIA POR TODA A ETERNIDADE!',
          'ATÉ EM QUEM NÃO TEM MÉRITO, A ALEGRIA FLORESCERÁ.'
        ]
      },
      {
        lyric: [
          'CAEM AS FOLHAS DAS ÁRVORES QUANDO VEM O INVERNO,',
          'MAS, QUANDO VEM A PRIMAVERA, CANTAM AS AVES NOS SEUS GALHOS.',
          'ATRAVÉS DO SANTO ESPÍRITO, CANTEMOS NÓS TAMBÉM.',
          'POR TODA A ETERNIDADE, A FLOR IRÁ PERFUMAR.'
        ]
      },
      {
        lyric: [
          'VÓS, OS QUE CANSADOS ESTAIS, VINDE AQUI DESCANSAR.',
          'OUVE-SE A VOZ DO SENHOR NOS MONTES E NOS CAMPOS.',
          'CANTEMOS ALELUIA, RECEBENDO A SALVAÇÃO:',
          'A ALEGRIA E A PAZ EM SIÃO SE PROPAGARÃO.'
        ]
      },
      {
        lyric: [
          'QUEM PODERÁ NOS REDIMIR E NOS PURIFICAR',
          'DAS TREVAS DO ABISMO, ALÉM DO SENHOR?',
          'CANTEMOS ALELUIA, CONFIANDO EM JESUS,',
          'QUE MORREU NA CRUZ, RESSUSCITOU E VIVE PARA SEMPRE.'
        ]
      },
      {
        lyric: [
          'DEUS TODO-PODEROSO É O SENHOR JESUS CRISTO.',
          'ADOREMOS A ELE, QUE É O NOSSO DEUS E PAI.',
          'CANTEMOS ALELUIA COM OS ANJOS DE DEUS.',
          'DAI GLÓRIA AO SANTO NOME DO INFINITO AMOR.'
        ]
      }
    ]
  },
  {
    id: '38',
    number: 38,
    title: 'VINDE, IRMÃOS!',
    stanzas: [
      {
        lyric: [
          'Ó IRMÃOS, VINDE PARA LOUVAR AO SENHOR!',
          'O NOSSO SENHOR CRISTO JESUS',
          'POR SUAS OVELHAS PROCURANDO ESTÁ.',
          'REGRESSAI AO SENHOR E PAZ RECEBEI!'
        ]
      },
      {
        lyric: [
          'DO ABISMO DO PECADO RESGATADO FUI,',
          'E AGORA NÃO SEI COMO EXPRESSAR',
          'ESTA GRANDE ALEGRIA DE CONHECER A DEUS.',
          'EU VIVO A CANTAR NO REINO DA LUZ!'
        ]
      },
      {
        lyric: [
          'Ó IRMÃOS QUE FARDO TENDES SUPORTADO,',
          'OBEDECENDO, TENHAIS O VOSSO DESCANSO.',
          'SUAVE JUGO É O NOME DE JESUS, ',
          'PELO ESPÍRITO SANTO RECEBEI FORÇA.'
        ]
      },
      {
        lyric: [
          'QUANDO ENFERMOS ESTIVERDES, ORAI AO SENHOR;',
          'QUANDO TRISTES ESTIVERDES, CLAMAI AO SENHOR.',
          'CONFIANDO NA FORÇA DE DEUS, DE  NSIAS VOS LIVRAI.',
          'ETERNAMENTE LOUVAI O NOME DO SENHOR!'
        ]
      }
    ]
  },
  {
    id: '39',
    number: 39,
    title: 'AH! QUE FELICIDADE!',
    stanzas: [
      {
        lyric: [
          'AH! QUE FELICIDADE! É O AMOR DE DEUS.',
          'AH! QUÃO DELEITOSA É A SALVAÇÃO.',
          'A PALAVRA DA VIDA, QUE O SENHOR NOS PREPAROU',
          'DESDE A CRIAÇÃO DO MUNDO, JAMAIS MUDARÁ.'
        ]
      },
      {
        lyric: [
          'Ó VIGIAS, VEDE: QUE TEMPO É ESTE?',
          'O AMANHÃ JÁ VEM, VAI ALTA A NOITE.',
          'PREPARAI-VOS TODOS, JÁ SE APROXIMA O FIM.',
          'OUVI A VOZ DO SENHOR, QUE DIZ: "SALVAI-VOS!".'
        ]
      },
      {
        lyric: [
          'Ó DEUS DE AMOR! AO LERMOS A BÍBLIA,',
          'AS NUVENS DE AFLIÇÕES SE APARTARÃO.',
          'O SANTO CAMINHO QUE O SENHOR NOS PREPAROU',
          'É ILUMINADO PELA LUZ DO ESPÍRITO SANTO.'
        ]
      },
      {
        lyric: [
          'O REINO ETERNO VEM DESCENDO DO CÉU.',
          'O SENHOR PASSOU A VIVER EM NÓS.',
          'RECEBENDO O CHAMADO DO SENHOR DA GLÓRIA,',
          'CANTEMOS PARA SEMPRE. A GRAÇA TRANSBORDARÁ.'
        ]
      }
    ]
  },
  {
    id: '41',
    number: 41,
    title: 'O SIGNIFICADO DO BATISMO',
    stanzas: [
      {
        lyric: [
          'NICODEMOS PERGUNTOU AO SENHOR JESUS:',
          '"ONDE ESTÁ O VERDADEIRO CAMINHO DA SALVAÇÃO?".',
          'ENQUANTO DORMIAM OS FARISEUS, JESUS LHE RESPONDEU:',
          '“QUEM NÃO NASCER DE NOVO NÃO PODERÁ SER SALVO”.'
        ]
      },
      {
        lyric: [
          'FOMOS FEITOS FILHOS DO REINO DE DEUS,',
          'NÓS QUE NASCEMOS DE NOVO, DA ÁGUA E DO ESPÍRITO.',
          '“EU SOU O FIM DAS LEIS”, DIZ O NOSSO SENHOR,',
          'QUE SELOU O NOSSO CORAÇÃO COM A PROMESSA DE PAI PARA FILHO.'
        ]
      },
      {
        lyric: [
          'O SENHOR NOS SEPULTOU NO BATISMO PELO SEU SANGUE',
          'PARA, NO NOVO REINO, REGISTRAR O NOSSO NOME.',
          'O CORAÇÃO DO PECADOR PURIFICADO É',
          'PARA, COM PRAZER, CUMPRIR A VONTADE DO NOSSO DEUS.'
        ]
      },
      {
        lyric: [
          'O BATISMO, EM NOME DO SENHOR CRISTO JESUS,',
          'UM ÚNICO ESPÍRITO NOS FEZ RECEBER.',
          'ATÉ O DIA EM QUE ESTAREMOS NO REINO DA GLÓRIA,',
          'À SOMBRA DAS ASAS DE DEUS VIVEREMOS EM PAZ.'
        ]
      }
    ]
  },
  {
    id: '42',
    number: 42,
    title: 'BATISMO',
    stanzas: [
      {
        lyric: [
          'VAGANDO PELA ESCURIDÃO ESTIVE ATÉ QUE O SENHOR,',
          'PELAS MONTANHAS ÍNGREMES, VEIO ME PROCURAR.',
          'ESTENDENDO AS SUAS MÃOS, O SENHOR ME RESGATOU,',
          'GUIANDO-ME PARA JUNTO DA FONTE DA ÁGUA.'
        ]
      },
      {
        lyric: [
          'QUANDO EU VIVIA NAS TREVAS, SEM NADA MAIS ENXERGAR',
          'E CANSADO DE AFUNDAR NA LAMA DO PECADO,',
          'O SENHOR ME ARREBATOU PARA ME ACOLHER.',
          'ARREPENDIDO EU ESTOU E AGORA VOLTO AO MEU SENHOR.'
        ]
      },
      {
        lyric: [
          'O BATISMO EM NOME DO SENHOR JESUS RECEBI',
          'E EM SUAS MÃOS EU ENTREGUEI MEU CORPO E ALMA.',
          'NESTE GLORIOSO DIA, O BATISMO RECEBI; ',
          'NASCI NO REINO DE DEUS, NO REINO DO MEU SENHOR.'
        ]
      },
      {
        lyric: [
          'DAS MINHAS ANTIGAS VESTES DE TRANSGRESSÕES ME LIVREI,',
          'LAVANDO-ME NO SANGUE DO SENHOR JESUS CRISTO.',
          'COMO SINAL DE FILHO DE DEUS, O ESPÍRITO RECEBI,',
          'E O MEU NOME AGORA ESTÁ INSCRITO NO LIVRO DE DEUS.'
        ]
      }
    ]
  },
  {
    id: '43',
    number: 43,
    title: 'CULTO',
    stanzas: [
      {
        lyric: [
          'TODOS NÓS, QUE ALMEJAMOS O REINO DE DEUS,',
          'SE DEIXARMOS DE LOUVAR AO CRIADOR,',
          'EM TREVAS SE TORNARÁ TODO ESTE MUNDO,',
          'COMO SE NÃO EXISTISSEM LUA NEM ESTRELAS.'
        ]
      },
      {
        lyric: [
          'ADOREMOS E OREMOS AO CRIADOR',
          'EM ESPÍRITO E EM VERDADE,',
          'POIS ELE ENTREGOU A SUA VIDA PARA NOS SALVAR;',
          'MISERICORDIOSO É O SENHOR NOSSO DEUS.'
        ]
      },
      {
        lyric: [
          'MESMO QUE OS TESOUROS DESTE MUNDO VENHAM A SE CORROMPER,',
          'OS DO CÉU PARA SEMPRE LÁ ESTARÃO.',
          'CONCLUÍDO O NOVO REINO E VINDO O NOSSO SENHOR,',
          'CHAMANDO PELO NOME NOS RECEBERÁ.'
        ]
      },
      {
        lyric: [
          'ADOREMOS AO SENHOR, O NOSSO CRIADOR,',
          'QUE SOBREMANEIRA TEM NOS AMADO.',
          'TRAJES DE JUSTIÇA ELE NOS PREPARA',
          'PARA RECEBER A NÓS COMO SUA NOIVA.'
        ]
      }
    ]
  },
  {
    id: '44',
    number: 44,
    title: 'SÁBADO: O DIA DE DESCANSO',
    stanzas: [
      {
        lyric: [
          'TERMINANDO A JORNADA DE SEIS DIAS',
          'E APRESENTANDO-NOS PERANTE JESUS,',
          'ILUMINADOS PELA LUZ DO AMOR,',
          'VENCEREMOS MAIS ESTA LUTA DE HOJE.'
        ]
      },
      {
        lyric: [
          'REPOUSANDO AOS PÉS DO SENHOR JESUS,',
          'OS LAÇOS DO PECADO DESFEITOS SERÃO.',
          'CONVERTIDOS SEREIS DAS TREVAS À LUZ,',
          'NA LIBERDADE QUE O ESPÍRITO VOS DÁ.'
        ]
      },
      {
        lyric: [
          'COMPREENDENDO AS ESCRITURAS E OS SEUS MISTÉRIOS,',
          'E RECEBENDO, EM NÓS, A GRAÇA DE DEUS,',
          'A FONTE FLUIRÁ EM NOSSO INTERIOR',
          'E LOGO FLORESCERÃO FLORES NO DESERTO.'
        ]
      },
      {
        lyric: [
          'COMPLETANDO A CARREIRA QUE NOS FOI PROPOSTA,',
          'PREPARADA ESTARÁ A COROA DA JUSTIÇA.',
          'ASSIM QUE AMANHECER, APÓS O REPOUSO,',
          'ESTAREMOS NO GLORIOSO REINO DE DEUS.'
        ]
      }
    ]
  },
  {
    id: '45',
    number: 45,
    title: 'DAI GLÓRIA AO SENHOR!',
    stanzas: [
      {
        lyric: [
          'DAI GLÓRIA AO SENHOR! GLÓRIA! GLÓRIA!',
          'CANTEMOS PARA QUE HAJA GLÓRIA AO SENHOR.',
          'O SENHOR ABENÇOOU A LINHAGEM DO REI DAVI,',
          'ABRINDO O CAMINHO PARA A NOSSA SALVAÇÃO.',
          'LOUVEMOS O SANTO NOME POR TODA A ETERNIDADE!'
        ]
      },
      {
        title: '(estribilho)',
        lyric: ['ALELUIA! ALELUIA! DAI GLÓRIA AO SENHOR!']
      },
      {
        lyric: [
          'OUVE, Ó POVO DE DEUS! GLÓRIA! GLÓRIA!',
          'O SANTO REINO ESTÁ REPLETO DE GLÓRIA.',
          'DESDE O DIA DE PENTECOSTES ATÉ OS DIAS DE HOJE,',
          'DERRAMADO TEM, O SENHOR, O ESPÍRITO SANTO.',
          'A ÁRVORE DA VIDA SEMPRE O SEU FRUTO DARÁ.'
        ]
      },
      {
        lyric: [
          'CHEIOS DO ESPÍRITO SANTO, ALELUIA!, ALELUIA!, (At 2:4)',
          'E REPLETOS DE ALEGRIA, LOUVAI AO SENHOR.',
          'NASCEMOS DE NOVO, NOS TORNAMOS FILHOS DE DEUS.',
          'VEM LOGO, Ó SENHOR, NÓS ESTAMOS AQUI!',
          'CANTAREMOS E DANÇAREMOS NO TABERNÁCULO DO CÉU.'
        ]
      },
      {
        lyric: [
          'RESPLANDECENDO ESTÁ A GLÓRIA. GLÓRIA! GLÓRIA!',
          'O CORDEIRO ESTÁ ASSENTADO NO SEU TRONO.',
          'SERVIDOS PELOS ANJOS, CANTAM OS SANTOS DE DEUS.',
          'AGITANDO OS RAMOS DE PALMEIRAS, CLAMAMOS TODOS NÓS:',
          '"SÓ O NOSSO SENHOR JESUS É O VERDADEIRO REI DOS REIS!".'
        ]
      }
    ]
  },
  {
    id: '46',
    number: 46,
    title: 'CANTAR LOUVORES É O NOSSO DESCANSO',
    stanzas: [
      {
        lyric: [
          'CANTAR LOUVORES É O NOSSO DESCANSO.',
          'NA GLORIOSA PRESENÇA, CONGREGANDO-NOS TODOS,',
          'ENTREGANDO O NOSSO FARDO NAS MÃOS DO SENHOR,',
          'CANTANDO ALELUIA, LOUVEMOS A DEUS.'
        ]
      },
      {
        lyric: [
          'COM ALEGRIA, VAMOS TODOS LOUVAR AO SENHOR:',
          'O CULTO EM ESPÍRITO E EM VERDADE,',
          'QUE TRANSBORDA DE GRAÇAS E DE LOUVORES,',
          'É A MISERICÓRDIA AOS ESCOLHIDOS.'
        ]
      },
      {
        lyric: [
          'FOMOS SALVOS NÃO SEGUNDO NOSSAS PRÓPRIAS OBRAS:',
          'DA ÁGUA E DO ESPÍRITO NASCEMOS DE NOVO.',
          'LOUVEMOS, COMPREENDENDO A BÊNÇÃO E A GRAÇA',
          'DE SERMOS CHAMADOS "FILHOS DE DEUS".'
        ]
      },
      {
        lyric: [
          'O SENHOR É A NOSSA ROCHA E O NOSSO REFÚGIO:',
          'O SENHOR NOS GUIA, SOCORRE E CONSOLA',
          'COM O SEU IMUTÁVEL E INFINITO AMOR.',
          'CONFIEMOS NO SENHOR DE TODO O CORAÇÃO.'
        ]
      },
      {
        lyric: [
          'ALELUIA! ALELUIA! EM BREVE O SENHOR,',
          'JUNTO COM OS SEUS ANJOS, DESCERÁ DOS CÉUS.',
          'BATALHEMOS PELA FÉ, DILIGENTEMENTE,',
          'SEMPRE ATENTOS ÀS CILADAS DO SATANÁS.'
        ]
      }
    ]
  },
  {
    id: '47',
    number: 47,
    title: 'HARPAS E SALTÉRIOS, CANTAI!',
    stanzas: [
      {
        lyric: [
          'HARPAS E SALTÉRIOS, CANTAI! VEM O ESPÍRITO DE JESUS!',
          'ENCHENDO TODA A TERRA IRÃO AS VOZES DE LOUVOR.'
        ]
      },
      {
        title: '(estribilho)',
        lyric: ['ALELUIA! ALELUIA! RESGATADOS FOMOS POR JESUS.', 'O SENHOR QUE MORREU NA CRUZ VIVE AGORA EM NÓS.']
      },
      {
        lyric: ['Ó CÉUS, Ó TERRA, LOUVAI O NOME DO SENHOR JESUS!', 'DEUS TODO-PODEROSO É O SENHOR QUE RESSUSCITOU.']
      },
      {
        lyric: ['DA ÁGUA E DO ESPÍRITO NASCEMOS NO REINO DE DEUS,', 'PARA RECEBERMOS DO SENHOR A ETERNA VIDA.']
      },
      {
        lyric: [
          'NASCENDO ATRAVÉS DO SENHOR, A NOSSA VIDA SE TRANSFORMOU.',
          'A ALEGRIA DOS FILHOS DE DEUS ENCHE O NOSSO CORAÇÃO.'
        ]
      },
      {
        lyric: ['A FÉ MOVE OS MONTES, O AMOR FAZ O HOMEM VIVER.', 'ILUMINEMOS ESTE MUNDO COM A LUZ DA ESPERANÇA.']
      }
    ]
  },
  {
    id: '48',
    number: 48,
    title: 'LOUVAI A JESUS',
    stanzas: [
      {
        lyric: [
          'LOUVAI A JESUS, ADORAI AO SENHOR!',
          'O SENHOR DA VIDA, DOS CÉUS DESCERÁ.',
          'BENDIZEI AS OBRAS DO SENHOR, DEUS DE ELIAS.',
          'ARDE NO MEU CORAÇÃO A CHAMA DO ESPÍRITO SANTO.'
        ]
      },
      {
        lyric: [
          'COM ALEGRIA, BENDIZEI O NOME DE JESUS,',
          'QUE MORREU SOBRE A CRUZ, MAS LOGO RESSUSCITOU.',
          'O PRIMOGÊNITO DENTRE OS MORTOS NOS SALVOU,',
          'REUNINDO-NOS COMO O POVO DO REINO DE DEUS.'
        ]
      },
      {
        lyric: [
          'CANTAI AO SENHOR, LOUVAI A JESUS!',
          'QUANDO EU ANDAVA NO PECADO, PURIFICOU-ME O SENHOR.',
          'MAIS QUE O HISSOPO É O SANGUE QUE ME PURIFICOU,',
          'TRANSFORMANDO-ME EM TEMPLO DO ESPÍRITO SANTO.'
        ]
      },
      {
        lyric: [
          'DO FUNDO DO CORAÇÃO, LOUVAI A JESUS!',
          'O CAMINHO DA VIDA AQUI SE ABRE.',
          'A ASSEMBLEIA DOS SANTOS FAZ VERTER O SANTO REINO,',
          'RETUMBANDO PELOS CÉUS A VOZ DA VITÓRIA.'
        ]
      }
    ]
  },
  {
    id: '49',
    number: 49,
    title: 'UM CULTO DE SALMOS',
    stanzas: [
      {
        lyric: [
          'NÓS FOMOS ESCOLHIDOS PELO SENHOR,',
          'FOMOS FEITOS HERDEIROS DO SEU SANTO REINO.',
          'HOJE TAMBÉM HÁ UM BANQUETE DE CANÇÕES,',
          'CANTAI E LOUVAI O NOME DE JESUS!'
        ]
      },
      {
        lyric: [
          'FLORES BRANCAS, AMARELAS, VERMELHAS, ROXAS...',
          'TODAS, COLORIDAS, LOUVAM AO SENHOR.',
          'PERFUMADAS SÃO AS BRISAS DO REINO DE DEUS',
          'COM O AROMA DO AMOR DO SANTO ESPÍRITO.'
        ]
      },
      {
        lyric: [
          'OS PECADOS, PERDOADOS E PURIFICADOS;',
          'E DIANTE DO PORTÃO DO REINO DE DEUS,',
          'OUVIMOS A CANÇÃO DOS FILHOS DE DEUS.',
          'VINDE TODOS A CANTAR DIANTE DO SENHOR!'
        ]
      },
      {
        lyric: [
          'CANTEMOS A INFINITA GRAÇA DO SENHOR.',
          'FONTES TRANSBORDARÃO DO NOSSO INTERIOR.',
          'RESPLANDECENDO ESTÁ O REINO DE JESUS.',
          'CANTANDO ALELUIA, LOUVAI AO SENHOR!'
        ]
      }
    ]
  },
  {
    id: '50',
    number: 50,
    title: 'LOUVAI AO ESPÍRITO SANTO',
    stanzas: [
      {
        lyric: [
          'LOUVAI O NOME DO REDENTOR, ',
          'O NOSSO SENHOR JESUS!',
          'OS HINOS DE ALEGRIA ENCHEM O NOSSO CORAÇÃO',
          'E A SOMBRA DE DÚVIDAS VAI DESAPARECENDO.'
        ]
      },
      {
        title: '(estribilho)',
        lyric: ['Ó ESPÍRITO SANTO, DEUS VIVO, SENHOR DA VIDA!', 'POR TODA A ETERNIDADE, LOUVAI AO SENHOR.']
      },
      {
        lyric: [
          'POR AMOR A NÓS, O SENHOR JESUS',
          'DERRAMOU SEU SANGUE SOBRE A CRUZ.',
          'CANTAI E LOUVAI! FOMOS SALVOS GRAÇAS',
          'À OBRA QUE ELE REALIZOU NA CRUZ.'
        ]
      },
      {
        lyric: [
          'O ESPÍRITO SANTO É NOSSO AMIGO',
          'E TAMBÉM NOSSO PROGENITOR.',
          'NÓS SEMPRE CANTAREMOS LOUVORES AO SENHOR,',
          'QUE AGORA HABITA EM NÓS.'
        ]
      },
      {
        lyric: [
          'A LAVAGEM DE ÁGUA NOS PURIFICOU',
          'E NASCEMOS DE NOVO.',
          'CAMINHEMOS, POIS, SEGUNDO O ESPÍRITO SANTO',
          'TODOS NÓS QUE PELA GRAÇA FOMOS RESGATADOS.'
        ]
      }
    ]
  }
]