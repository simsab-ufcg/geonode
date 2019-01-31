var dataDesertificacao = {
    name: "Desertificação",
    color: "level_one_desertif_color",
    labelColor: "black", 
    imgName: "geonode:gfsol_nmin_compress_2",
    level: 1,
    children: [
      {
        name: "Estado",
        color: "level_two_color",
        labelColor: "black",           
        imgName: "geonode:dprur",
        size: 2,
        level: 2,
        children: [
          {
            name: "Condição Ambiental",
            color: "level_three_estado_color",
            labelColor: "white",                  
            size: 10,
            imgName: "geonode:aernp",
            level: 3,
            children: [
              {                  
                name: "Indice de Aridez",
                color: "level_four_condicao_ambiental_color",
                labelColor: "black",
                imgName: "",
                level: 4,
                size: 5
              },
              {
                name: "Indice de Seca",
                color: "level_four_condicao_ambiental_color",
                labelColor: "black", 
                imgName: "",   
                level: 4,                 
                size: 3.3
              },
              {
                name: "Cobertura Vegetal",
                color: "level_four_condicao_ambiental_color",
                labelColor: "black",                     
                imgName: "",
                level: 4,
                size: 5
              },
              {
                name: "Grau de Fertilidade do Solo",
                color: "level_four_condicao_ambiental_color",
                labelColor: "black",                     
                imgName: "",
                level: 4,
                size: 5
              },
              {
                name: "Risco de Erosão Hidrica",
                color: "level_four_condicao_ambiental_color",
                labelColor: "black",   
                imgName: "",     
                level: 4,          
                size: 5
              }
            ]
          },
          {
            name: "Condição Econômica",
            color: "level_three_estado_color",
            labelColor: "white",               
            size: 10,
            level: 3,
            imgName: "geonode:afagp_1",
            children: [
              {
                name: "Renda Per Capita Rural",
                color: "level_four_condicao_economica_color",
                labelColor: "white",              
                level: 4,                          
                imgName: "",
                size: 5
              },
              {
                name: "Produtividade do Feijão",
                color: "level_four_condicao_economica_color", 
                labelColor: "white", 
                level: 4,                   
                imgName: "",
                size: 5
              },
              {
                name: "Produtividade do Milho",
                color: "level_four_condicao_economica_color",    
                labelColor: "white",
                level: 4,   
                imgName: "geonode:rctm2006mm",              
                size: 5
              }
            ]
          },
          {
            name: "Condição Social",
            color: "level_three_estado_color",
            labelColor: "white",    
            level: 3,             
            size: 10,
            imgName: "geonode:analf",
            children: [
              {
                name: "Densidade de População Rural",
                color: "level_four_condicao_social_color",
                labelColor: "white",  
                level: 4,   
                imgName: "",                    
                size: 5
              },
              {
                name: "Estabelecimentos Rurais Dirigidos por Mulheres",
                color: "level_four_condicao_social_color",
                labelColor: "white",
                level: 4,   
                imgName: "",
                size: 5
              }
            ]
          }
        ]
      },
      {
        name: "Força Motriz",
        color: "level_two_color",
        labelColor: "black",          
        imgName: "geonode:rpcr",
        level: 2,
        size: 2,
        children: [
          {
            name: "Concentração de Terra",
            color: "level_three_forca_motriz_color",
            labelColor: "white",        
            level: 3,                                
            size: 10,
            imgName: "geonode:dprur",
            children: [
              {
                name:
                  "Área dos Estabelecimentos Rurais Menores que o Módulo Fiscal",
                color: "level_four_condicao_terra_color",
                labelColor: "black",                     
                level: 4,   
                imgName: "", 
                size: 3.3
              },
              {
                name:
                  "Área dos Estabelecimentos Rurais Sob Regime de Não Propriedade",
                color: "level_four_condicao_terra_color",
                labelColor: "black",                     
                level: 4,   
                imgName: "",  
                size: 3.3
              }
            ]
          },
          {
            name: "Influência da População Urbana",
            color: "level_three_forca_motriz_color",
            labelColor: "white",              
            level: 3,      
            imgName: "geonode:dtsaa_nmin",
            imgName: "",  
            size: 14
          },
          {
            name: "Desigualdade Social no Campo",
            color: "level_three_forca_motriz_color",
            labelColor: "white",           
            level: 3,         
            size: 10,
            imgName: "geonode:nogip",
            children: [
              {
                name: "Analfabetismo no Campo",
                color: "level_four_influencia_social_campo_color",
                labelColor: "white", 
                level: 4,   
                imgName: "",                        
                size: 3.3
              },
              {
                name: "População Rural Abaixo da Linha de Pobreza",
                color: "level_four_influencia_social_campo_color",
                labelColor: "white",     
                level: 4,   
                imgName: "",  
                size: 3.3
              }
            ]
          }
        ]
      },
      {
        name: "Respostas",
        color: "level_two_color",
        labelColor: "black",              
        imgName: "geonode:nong",
        level: 2,
        size: 2,
        children: [
          {
            name: "Organização da Sociedade Civil",
            color: "level_three_resposta_color",
            labelColor: "white",                      
            imgName: "level_four_sociedade_civil_color", 
            level: 3,   
            size: 10,
            children: [
              {
                name: "ONG's Dedicadas ao Desenvolvimento Rural Sustentável",
                color: "level_four_sociedade_civil_color",
                labelColor: "black", 
                level: 4,   
                imgName: "geonode:nong",                        
                size: 3.3
              },
              {
                name: "Famílias Atendidas com Tecnologias Sociais de Acesso à Água",
                color: "level_four_sociedade_civil_color",
                labelColor: "black",     
                level: 4,   
                imgName: "geonode:dtsaa_nmin",  
                size: 3.3
              }
            ]              
          },
          {
            name: "Organização do Poder Público",
            color: "level_three_resposta_color",
            labelColor: "white",  
            level: 3,   
            imgName: "",                 
            size: 10,
            children: [
              {
                name: "Organizações Governamentais e Instituições de Pesquisa Dedicadas ao Desenvolvimento Rural Sustentável",
                color: "level_four_poder_publico_color",
                labelColor: "black", 
                level: 4,   
                imgName: "geonode:nogip",                        
                size: 3.3
              },
              {
                name: "Programas Dedicados ao Desenvolvimento Rural Sustentável",
                color: "level_four_poder_publico_color",
                labelColor: "black",     
                level: 4,   
                imgName: "geonode:npdrs",  
                size: 3.3
              },
              {
                name: "Variação das Transferências de Renda",
                color: "level_four_poder_publico_color",
                labelColor: "black", 
                level: 4,   
                imgName: "geonode:vptr_1",                        
                size: 3.3
              },
              {
                name: "Proteção por Unidade de Conservação",
                color: "level_four_poder_publico_color",
                labelColor: "black",     
                level: 4,   
                imgName: "geonode:npuc",  
                size: 3.3
              }                
            ]                  
          }
        ]
      },
      {
        name: "Impacto",
        color: "level_two_color",
        labelColor: "black",              
        imgName: "geonode:npdrs",
        level: 2,
        size: 5,
        children: [
          {
            name: "Taxa de Migração do Campo para a Cidade",
            color: "level_three_impacto_color",
            labelColor: "white",        
            level: 3,   
            imgName: "",            
            size: 14
          },
          {
            name: "Variação da Participação da Agropecuária no PIB",
            color: "level_three_impacto_color",
            labelColor: "white",                
            level: 3,   
            imgName: "",  
            size: 14
          }
        ]
      },
      {
        name: "Pressão",
        color: "level_two_color",
        labelColor: "black",              
        imgName: "geonode:npuc",
        size: 2,
        level: 2,
        children: [
          {
            name: "Desmatamento",
            color: "level_three_pressao_color",
            labelColor: "black",    
            level: 3,                   
            size: 10,
            imgName: "geonode:pralp",
            children: [
              {
                name: "Avanço da Fronteira Agropecuária",
                color: "level_four_pressao_desmatamento_campo_color",
                labelColor: "black",                       
                level: 4,   
                imgName: "geonode:vpr_10",
                size: 3.3
              },
              {
                name: "Mudança da Cobertura Vegetal",
                color: "level_four_pressao_desmatamento_campo_color",
                labelColor: "black",    
                level: 4,                       
                imgName: "geonode:rpcr",
                size: 3.3
              }
            ]
          },
          {
            name: "Manejamento Inadequado da Terra",
            color: "level_three_pressao_color",
            labelColor: "black",             
            level: 3,     
            size: 10,
            imgName: "geonode:rctf2006mm",
            children: [
              {
                name: "Carga Animal Excessiva",
                color: "level_four_pressao_manejamento_ina_color",
                labelColor: "black",
                level: 4,   
                imgName: "",                        
                size: 3.3
              },
              {
                name: "Recorrência de Incêndio",
                color: "level_four_pressao_manejamento_ina_color",
                labelColor: "black",   
                level: 4,       
                imgName: "",                
                size: 3.3
              }
            ]
          }
        ]
      }
    ]
  };