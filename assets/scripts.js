// ========== Spocky Games - scripts.js ==========

// Navbar: flip
document.querySelectorAll('.icon-flip').forEach(function(icon) {
  icon.addEventListener('mouseenter', function() {
    icon.classList.add('flipped');
  });
  icon.addEventListener('mouseleave', function() {
    icon.classList.remove('flipped');
  });
  icon.addEventListener('touchstart', function(e) {
    icon.classList.toggle('flipped');
    e.preventDefault();
  }, {passive: false});
  icon.addEventListener('focus', function() {
    icon.classList.add('flipped');
  });
  icon.addEventListener('blur', function() {
    icon.classList.remove('flipped');
  });
});

// Navbar: Hambúrguer
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('open');
}

// Header
const header = document.querySelector('.header');
if (header) {
  let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.classList.remove('hide');
    } else {
      header.classList.add('hide');
    }
    prevScrollpos = currentScrollPos;
  });
}

// Navbar: Hambúrguer Abrir e Fechar 
function toggleMenu() {
  const navUl = document.querySelector('nav ul');
  navUl.classList.toggle('open');
}

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    const navUl = document.querySelector('nav ul');
    navUl.classList.remove('open');
  });
});

// ========== Timeline e Modais ==========
document.addEventListener('DOMContentLoaded', function () {
  // DADOS DAS GERAÇÕES E CONSOLES
  const generations = [
    {
      gen: 1,
      title: "1ª Geração",
      period: "1972–1977",
      consoles: [
        {
          name: "Magnavox Odyssey",
          img: "/assets/images/consoles/odyssey.png",
          ficha: [
            ["Lançamento", "1972"],
            ["CPU", "Sem microprocessador"],
            ["RAM", "Sem RAM"],
            ["Mídia", "Cartões de circuito"],
          ],
          curiosidades: [
            "Primeiro console doméstico da história.",
            "Não tinha som e usava cartões para alterar os jogos."
          ]
        }
      ]
    },
    {
      gen: 2,
      title: "2ª Geração",
      period: "1976–1983",
      consoles: [
        {
          name: "Atari 2600",
          img: "/assets/images/consoles/atari.png",
          ficha: [
            ["Lançamento", "1977"],
            ["CPU", "MOS 6507, 1.19 MHz"],
            ["RAM", "128 bytes"],
            ["Mídia", "Cartuchos"],
          ],
          curiosidades: [
            "Popularizou os videogames em casa.",
            "Jogos clássicos como Pitfall e River Raid."
          ]
        },
        {
          name: "Intellivision",
          img: "/assets/images/consoles/intellivision.png",
          ficha: [
            ["Lançamento", "1980"],
            ["CPU", "GI CP1610, 894 kHz"],
            ["RAM", "1.5 KB"],
            ["Mídia", "Cartuchos"],
          ],
          curiosidades: [
            "Rival do Atari, trouxe gráficos melhores.",
            "Controle numérico inovador."
          ]
        },
        {
          name: "ColecoVision",
          img: "/assets/images/consoles/colecovision.png",
          ficha: [
            ["Lançamento", "1982"],
            ["CPU", "Zilog Z80A, 3.58 MHz"],
            ["RAM", "1 KB"],
            ["Mídia", "Cartuchos"],
          ],
          curiosidades: [
            "Conhecido por ports fiéis de arcade como Donkey Kong."
          ]
        }
      ]
    },
    {
      gen: 3,
      title: "3ª Geração",
      period: "1983–1990",
      consoles: [
        {
          name: "MSX",
          img: "/assets/images/consoles/msx.png",
          ficha: [
            ["Lançamento", "1983"],
            ["CPU", "Zilog Z80A, 3.58 MHz"],
            ["RAM", "64 KB"],
            ["Mídia", "Cartuchos, fitas cassete"],
          ],
          curiosidades: [
            "Padrão de computadores muito popular no Japão e Brasil."
          ]
        },
        {
          name: "Nintendo Famicom / NES",
          img: "/assets/images/consoles/nes.png",
          ficha: [
            ["Lançamento", "1983 (JP), 1985 (EUA)"],
            ["CPU", "Ricoh 2A03, 1.79 MHz"],
            ["RAM", "2 KB"],
            ["Mídia", "Cartuchos"],
          ],
          curiosidades: [
            "Salvou a indústria dos games.",
            "Lançou franquias como Mario, Zelda e Metroid."
          ]
        }
      ]
    },
    {
      gen: 4,
      title: "4ª Geração",
      period: "1987–1996",
      consoles: [
        {
          name: "Commodore Amiga 1000",
          img: "/assets/images/consoles/amiga.png",
          ficha: [
            ["Lançamento", "1985"],
            ["CPU", "Motorola 68000, 7.16 MHz"],
            ["RAM", "256 KB"],
            ["Mídia", "Disquete"],
          ],
          curiosidades: [
            "Computador revolucionário em gráficos e som.",
            "Muito usado em jogos e produção audiovisual."
          ]
        },
        {
          name: "Sega Mega Drive / Genesis",
          img: "/assets/images/consoles/megadrive.png",
          ficha: [
            ["Lançamento", "1988 (JP), 1989 (EUA)"],
            ["CPU", "Motorola 68000, 7.6 MHz"],
            ["RAM", "64 KB"],
            ["Mídia", "Cartuchos"],
          ],
          curiosidades: [
            "Rival do Super Nintendo, famoso por Sonic."
          ]
        },
        {
          name: "Super Nintendo (SNES)",
          img: "/assets/images/consoles/supernintendo.png",
          ficha: [
            ["Lançamento", "1990 (JP), 1991 (EUA)"],
            ["CPU", "Ricoh 5A22, 3.58 MHz"],
            ["RAM", "128 KB"],
            ["Mídia", "Cartuchos"],
          ],
          curiosidades: [
            "Gráficos 16 bits, trilhas sonoras lendárias e clássicos como Mario World."
          ]
        }
      ]
    },
    {
      gen: 5,
      title: "5ª Geração",
      period: "1993–2001",
      consoles: [
        {
          name: "Sony PlayStation",
          img: "/assets/images/consoles/ps1.png",
          ficha: [
            ["Lançamento", "1994 (JP), 1995 (EUA)"],
            ["CPU", "MIPS R3000A, 33.9 MHz"],
            ["RAM", "2 MB"],
            ["Mídia", "CD-ROM"],
          ],
          curiosidades: [
            "Revolucionou com jogos em CD e gráficos 3D."
          ]
        },
        {
          name: "Nintendo 64",
          img: "/assets/images/consoles/nintendo64.png",
          ficha: [
            ["Lançamento", "1996"],
            ["CPU", "NEC VR4300, 93.75 MHz"],
            ["RAM", "4 MB (expansível)"],
            ["Mídia", "Cartuchos"],
          ],
          curiosidades: [
            "Famoso pelo controle inovador e jogos como Mario 64 e Zelda Ocarina of Time."
          ]
        }
      ]
    },
    {
      gen: 6,
      title: "6ª Geração",
      period: "1998–2006",
      consoles: [
        {
          name: "Sega Dreamcast",
          img: "/assets/images/consoles/dreamcast.png",
          ficha: [
            ["Lançamento", "1998 (JP), 1999 (EUA)"],
            ["CPU", "Hitachi SH-4, 200 MHz"],
            ["RAM", "16 MB"],
            ["Mídia", "GD-ROM"],
          ],
          curiosidades: [
            "Primeiro console com modem para internet."
          ]
        },
        {
          name: "Sony PlayStation 2",
          img: "/assets/images/consoles/ps2.png",
          ficha: [
            ["Lançamento", "2000"],
            ["CPU", "Emotion Engine, 294 MHz"],
            ["RAM", "32 MB"],
            ["Mídia", "DVD-ROM"],
          ],
          curiosidades: [
            "O console mais vendido da história, com biblioteca imensa."
          ]
        },
        {
          name: "Nintendo GameCube",
          img: "/assets/images/consoles/gamecube.png",
          ficha: [
            ["Lançamento", "2001"],
            ["CPU", "IBM PowerPC Gekko, 485 MHz"],
            ["RAM", "24 MB"],
            ["Mídia", "MiniDVD"],
          ],
          curiosidades: [
            "Pequeno, potente e com jogos como Smash Bros. Melee."
          ]
        },
        {
          name: "Microsoft Xbox",
          img: "/assets/images/consoles/xboxclassic.png",
          ficha: [
            ["Lançamento", "2001"],
            ["CPU", "Intel Pentium III, 733 MHz"],
            ["RAM", "64 MB"],
            ["Mídia", "DVD-ROM"],
          ],
          curiosidades: [
            "Primeiro console da Microsoft, trouxe Halo e Xbox Live."
          ]
        }
      ]
    },
    {
      gen: 7,
      title: "7ª Geração",
      period: "2004–2013",
      consoles: [
        {
          name: "Nintendo DS",
          img: "/assets/images/consoles/nintendods.png",
          ficha: [
            ["Lançamento", "2004"],
            ["CPU", "ARM9 e ARM7"],
            ["RAM", "4 MB"],
            ["Mídia", "Cartuchos"],
          ],
          curiosidades: [
            "Portátil inovador com duas telas e touchscreen."
          ]
        },
        {
          name: "Microsoft Xbox 360",
          img: "/assets/images/consoles/xbox360.png",
          ficha: [
            ["Lançamento", "2005"],
            ["CPU", "PowerPC tri-core, 3.2 GHz"],
            ["RAM", "512 MB"],
            ["Mídia", "DVD-ROM"],
          ],
          curiosidades: [
            "Popularizou o jogo online nos consoles e trouxe franquias como Halo e Gears of War."
          ]
        },
        {
          name: "Sony PlayStation 3",
          img: "/assets/images/consoles/ps3.png",
          ficha: [
            ["Lançamento", "2006"],
            ["CPU", "Cell Broadband Engine, 3.2 GHz"],
            ["RAM", "256 MB XDR"],
            ["Mídia", "Blu-ray"],
          ],
          curiosidades: [
            "Blu-ray, gráficos HD e jogos como The Last of Us."
          ]
        },
        {
          name: "Nintendo Wii",
          img: "/assets/images/consoles/wii.png",
          ficha: [
            ["Lançamento", "2006"],
            ["CPU", "IBM PowerPC Broadway, 729 MHz"],
            ["RAM", "88 MB"],
            ["Mídia", "Disco óptico proprietário"],
          ],
          curiosidades: [
            "Revolucionou com controles de movimento e jogos para toda família."
          ]
        }
      ]
    },
    {
      gen: 8,
      title: "8ª Geração",
      period: "2012–2020",
      consoles: [
        {
          name: "Nintendo Wii U",
          img: "/assets/images/consoles/wiiu.png",
          ficha: [
            ["Lançamento", "2012"],
            ["CPU", "IBM PowerPC tri-core, 1.24 GHz"],
            ["RAM", "2 GB"],
            ["Mídia", "Disco óptico proprietário"],
          ],
          curiosidades: [
            "Controle-tablet inovador, precursor do Switch."
          ]
        },
        {
          name: "Sony PlayStation 4",
          img: "/assets/images/consoles/ps4.png",
          ficha: [
            ["Lançamento", "2013"],
            ["CPU", "AMD Jaguar 8 núcleos"],
            ["RAM", "8 GB GDDR5"],
            ["Mídia", "Blu-ray, Digital"],
          ],
          curiosidades: [
            "Sucesso global, foco em jogos digitais e streaming."
          ]
        },
        {
          name: "Microsoft Xbox One",
          img: "/assets/images/consoles/xboxone.png",
          ficha: [
            ["Lançamento", "2013"],
            ["CPU", "AMD Jaguar 8 núcleos"],
            ["RAM", "8 GB DDR3"],
            ["Mídia", "Blu-ray, Digital"],
          ],
          curiosidades: [
            "Integração multimídia, jogos em 4K e retrocompatibilidade."
          ]
        },
        {
          name: "Nintendo Switch",
          img: "/assets/images/consoles/nintendoswitch.png",
          ficha: [
            ["Lançamento", "2017"],
            ["CPU", "NVIDIA Tegra X1"],
            ["RAM", "4 GB"],
            ["Mídia", "Cartuchos"],
          ],
          curiosidades: [
            "Híbrido portátil e de mesa, enorme sucesso mundial."
          ]
        }
      ]
    },
    {
      gen: 9,
      title: "9ª Geração",
      period: "2020–Atual",
      consoles: [
        {
          name: "Sony PlayStation 5",
          img: "/assets/images/consoles/ps5.png",
          ficha: [
            ["Lançamento", "2020"],
            ["CPU", "AMD Zen 2, 8 núcleos"],
            ["RAM", "16 GB GDDR6"],
            ["Mídia", "Blu-ray, Digital"],
          ],
          curiosidades: [
            "SSD ultrarrápido, gráficos em 4K e ray tracing."
          ]
        },
        {
          name: "Microsoft Xbox Series X",
          img: "/assets/images/consoles/xboxsseriesx.png",
          ficha: [
            ["Lançamento", "2020"],
            ["CPU", "AMD Zen 2, 8 núcleos"],
            ["RAM", "16 GB GDDR6"],
            ["Mídia", "Blu-ray, Digital"],
          ],
          curiosidades: [
            "O Xbox mais potente já feito, foco em retrocompatibilidade."
          ]
        }
      ]
    },
    {
      gen: "pc",
      title: "Computadores/PC",
      period: "Sempre evoluindo",
      consoles: [
        {
          name: "PC Gamer",
          img: "/assets/images/consoles/pcgamer.png",
          ficha: [
            ["Lançamento", "Sempre evoluindo!"],
            ["CPU", "Intel/AMD de última geração"],
            ["RAM", "Variável, até 128 GB ou mais"],
            ["Mídia", "Digital, Blu-ray, SSD, etc."],
          ],
          curiosidades: [
            "Plataforma mais flexível, com hardware de ponta.",
            "Mateus joga com processador de última geração, placas RTX e muita RAM!"
          ]
        }
      ]
    }
  ];

  // Adiciona eventos aos pontos da timeline
  document.querySelectorAll('.timeline-point').forEach(point => {
    point.addEventListener('click', function () {
      const genKey = point.getAttribute('data-gen');
      const genData = generations.find(g => String(g.gen) === String(genKey));
      if (!genData) return;
      showGenModal(genData);
    });
  });

  // Modal de geração
  function showGenModal(genData) {
    const modalBg = document.getElementById('gen-modal-bg');
    const modalContent = document.getElementById('gen-modal-content');
    modalContent.innerHTML = `
      <div class="generation-title">${genData.title}</div>
      <div class="generation-period">${genData.period}</div>
      <div class="generation-consoles">
        ${genData.consoles.map((c, idx) => `
          <div class="console-thumb" tabindex="0" data-gen="${genData.gen}" data-console="${idx}">
            <img src="${c.img}" alt="${c.name}" class="console-thumb-img">
            <div class="console-thumb-name">${c.name}</div>
          </div>
        `).join('')}
      </div>
    `;
    modalBg.classList.add('active');

    // Evento para abrir modal do console
    modalContent.querySelectorAll('.console-thumb').forEach(thumb => {
      thumb.addEventListener('click', function () {
        const genIdx = generations.findIndex(g => String(g.gen) === String(thumb.getAttribute('data-gen')));
        const consoleIdx = Number(thumb.getAttribute('data-console'));
        showConsoleModal(generations[genIdx].consoles[consoleIdx]);
      });
    });
  }

  // Modal do console
  function showConsoleModal(consoleData) {
    const modalBg = document.getElementById('console-modal-bg');
    const modalContent = document.getElementById('console-modal-content');
    modalContent.innerHTML = `
      <img src="${consoleData.img}" alt="${consoleData.name}" class="console-modal-img">
      <div class="console-modal-title">${consoleData.name}</div>
      <table class="console-modal-table">
        ${consoleData.ficha.map(f => `<tr><th>${f[0]}</th><td>${f[1]}</td></tr>`).join('')}
      </table>
      <div class="console-modal-curiosities">
        <b>Curiosidades:</b><br>
        ${consoleData.curiosidades.map(c => `<div>• ${c}</div>`).join('')}
      </div>
    `;
    modalBg.classList.add('active');
  }

  // Fechar modais ao clicar no X ou fora
  ['gen', 'console'].forEach(type => {
    const bg = document.getElementById(`${type}-modal-bg`);
    const close = document.getElementById(`${type}-modal-close`);
    if (close) {
      close.addEventListener('click', () => bg.classList.remove('active'));
    }
    if (bg) {
      bg.addEventListener('mousedown', e => {
        if (e.target === bg) bg.classList.remove('active');
      });
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') bg.classList.remove('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // DADOS DAS GERAÇÕES E CONSOLES
  const generations = [
    // ... (seu array de gerações e consoles aqui, igual já está) ...
  ];

  // Evento para abrir modal de geração
  document.querySelectorAll('.timeline-point').forEach(point => {
    point.addEventListener('click', function () {
      const genKey = point.getAttribute('data-gen');
      const genData = generations.find(g => String(g.gen) === String(genKey));
      if (!genData) return;
      showGenModal(genData);
    });
  });

  // Função para mostrar modal de geração
  function showGenModal(genData) {
    const modalBg = document.getElementById('gen-modal-bg');
    const modalContent = document.getElementById('gen-modal-content');
    modalContent.innerHTML = `
      <div class="generation-title">${genData.title}</div>
      <div class="generation-period">${genData.period}</div>
      <div class="generation-consoles">
        ${genData.consoles.map((c, idx) => `
          <div class="console-thumb" tabindex="0" data-gen="${genData.gen}" data-console="${idx}">
            <img src="${c.img}" alt="${c.name}" class="console-thumb-img">
            <div class="console-thumb-name">${c.name}</div>
          </div>
        `).join('')}
      </div>
    `;
    modalBg.classList.add('active');

    // Evento para abrir modal do console
    modalContent.querySelectorAll('.console-thumb').forEach(thumb => {
      thumb.addEventListener('click', function () {
        const genIdx = generations.findIndex(g => String(g.gen) === String(thumb.getAttribute('data-gen')));
        const consoleIdx = Number(thumb.getAttribute('data-console'));
        showConsoleModal(generations[genIdx].consoles[consoleIdx]);
      });
    });
  }

  // Função para mostrar modal de console
  function showConsoleModal(consoleData) {
    const modalBg = document.getElementById('console-modal-bg');
    const modalContent = document.getElementById('console-modal-content');
    modalContent.innerHTML = `
      <img src="${consoleData.img}" alt="${consoleData.name}" class="console-modal-img">
      <div class="console-modal-title">${consoleData.name}</div>
      <table class="console-modal-table">
        ${consoleData.ficha.map(f => `<tr><th>${f[0]}</th><td>${f[1]}</td></tr>`).join('')}
      </table>
      <div class="console-modal-curiosities">
        <b>Curiosidades:</b><br>
        ${consoleData.curiosidades.map(c => `<div>• ${c}</div>`).join('')}
      </div>
    `;
    modalBg.classList.add('active');
  }

  // Fechar modais ao clicar no X, fora ou ESC
  ['gen', 'console'].forEach(type => {
    const bg = document.getElementById(`${type}-modal-bg`);
    const close = document.getElementById(`${type}-modal-close`);
    if (close) {
      close.addEventListener('click', () => bg.classList.remove('active'));
    }
    if (bg) {
      bg.addEventListener('mousedown', e => {
        if (e.target === bg) bg.classList.remove('active');
      });
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') bg.classList.remove('active');
    });
  });
});

