// Intro Animation
const intro = document.querySelector(".intro");
const introLogo = document.querySelector(".introLogo");
const logoSpans = document.querySelectorAll(".logo-letter");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 100);
    });

    setTimeout(() => {
      logoSpans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (index + 1) * 100); // Fixed this from (span + 1) to (index + 1)
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  }, 0);
});

// Animated Nav Bar
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("active", window.scrollY > nav.offsetHeight + 50);
});

// Narrative Modal
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close");
const clickableImages = document.querySelectorAll(".clickable-image");

// Open narrative modal on image click
clickableImages.forEach(clickableImage => {
  clickableImage.addEventListener("click", (event) => {
    event.preventDefault();
    modalImage.src = clickableImage.src;
    imageModal.style.display = "flex"; 
    modalImage.style.transform = "scale(1.5)"; // Enlarge when opened
  });
});

// Close narrative modal
function closeNarrativeModal() {
  imageModal.style.display = "none"; 
  modalImage.style.transform = "scale(1)";
}

// Close modal on clicking the close button
closeModal.addEventListener("click", closeNarrativeModal);

// Close modal when clicking outside the image
window.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeNarrativeModal();
  }
});

// Close modal when clicking the modal image again
modalImage.addEventListener("click", closeNarrativeModal);

// Open narrative items in a new tab
document.querySelectorAll('.narrative').forEach(narrative => {
  narrative.addEventListener('click', () => {
    window.open(narrative.getAttribute('data-url'), '_blank');
  });
});

// Gallery Modal Initialization
window.addEventListener('DOMContentLoaded', () => {
  const galleryModal = document.getElementById("galleryModal");
  galleryModal.style.display = "none"; // Ensure gallery modal is hidden
});

// Open the gallery modal
function openGalleryModal(img) {
  const modalImg = document.getElementById("galleryModalImage");
  const modal = document.getElementById("galleryModal");
  modal.style.display = "flex"; 
  modalImg.src = img.src;
}

// Close the gallery modal
function closeGalleryModal() {
  document.getElementById("galleryModal").style.display = "none";
}

// Close the gallery modal when clicking outside the image
window.addEventListener("click", (event) => {
  if (event.target === document.getElementById("galleryModal")) {
    closeGalleryModal();
  }
});

// Hide scrollbar for the first 5 seconds
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('hide-scrollbar');

  setTimeout(() => {
    document.body.classList.remove('hide-scrollbar');
    document.body.classList.add('show-scrollbar');

    setTimeout(() => {
      document.body.classList.add('overflow-visible');
    }, 500); // Match this with the CSS transition duration
  }, 5000);
});

// Bark Animation
setTimeout(() => {
  const izumistands = document.getElementById('izumistands');
  const izumibarks = document.getElementById('izumibarks');

  izumistands.classList.add('barkhidden');

  setTimeout(() => {
    izumibarks.classList.remove('barkhidden'); // Show the second image
  }, 1);

  setTimeout(() => {
    izumibarks.classList.add('barkhidden'); 

    setTimeout(() => {
      izumistands.remove();
      izumibarks.remove();
    }, 1000); // Allow 1 second for fading out before removal
  }, 2000);
}, 4500);

// Massive Gallery
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const images = Array.from(track.children);
    let currentIndex = 0;

    // Create buttons
    const leftBtn = createCarouselButton('left', '&#10094;');
    const rightBtn = createCarouselButton('right', '&#10095;');
    carousel.appendChild(leftBtn);
    carousel.appendChild(rightBtn);

    // Function to create a carousel button
    function createCarouselButton(direction, innerHTML) {
      const button = document.createElement('button');
      button.classList.add('carousel-btn', direction);
      button.innerHTML = innerHTML;
      button.addEventListener('click', () => {
        currentIndex += (direction === 'right' ? 2 : -2);
        currentIndex = Math.max(0, Math.min(currentIndex, images.length - (window.innerWidth < 768 ? 2 : 4)));
        updateCarousel();
      });
      return button;
    }

    // Function to update the track position
    const updateCarousel = () => {
      const imageStyle = window.getComputedStyle(images[0]);
      const imageWidth = images[0].clientWidth + 
        parseInt(imageStyle.marginLeft, 10) + 
        parseInt(imageStyle.marginRight, 10);
      track.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Fixed template literal syntax
    };

    // Add click event to each image to open modal
    images.forEach(image => {
      image.addEventListener('click', () => {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const captionText = document.getElementById('caption');
        modal.style.display = 'block';
        modalImage.src = image.src; 
        captionText.innerHTML = image.alt; 
      });
    });

    updateCarousel();
  });

  // Close modal functionality
  const closeModal = document.querySelector('.close');
  closeModal.addEventListener('click', () => {
    document.getElementById('imageModal').style.display = 'none';
  });

  document.getElementById('imageModal').addEventListener('click', (event) => {
    if (event.target === document.getElementById('imageModal') || event.target === document.getElementById('modalImage')) {
      document.getElementById('imageModal').style.display = 'none';
    }
  });
});



// ====================================================================================== LANGUAGE MENU ======================================================================================





// Translations object
const translations = {
  en: {
    introText: "Izumi-chan: The origin of Neiro",
    paragraphText: "Izumi-chan lived in a shelter until Kabosumama rescued her and named her Neiro.",
    communityTakeover: "Community Takeover",
    communityTakeoverDesc: "Building from the ground up, no paid KOLs, no deals under the table. Izumi is all about organic growth.",
    liquidityBurned: "100% Liquidity Burned",
    liquidityBurnedDesc: "The original developer burned LP and renounced the contract.",
    transparency: "Built on Transparency",
    transparencyDesc: "We aim to start a new Meta for memecoins based on transparency and communication.",
    noMoreRugs: "No more rugs",
    noMoreRugsDesc: "Forget about PvP or Cabal vs CTOs. No more charts rugging. Izumi will be the new standard for trust and bullishness.",
    longTermVision: "Long term vision",
    longTermVisionDesc: "Izumi is more than a memecoin and she came here to stay, more on this very soon!",
    izumiChan: "Izumi-chan",
    izumiChanDesc: "The origin of Neiro... Ruff!",
    multiSigWallet: "Multi-sig wallet",
    multiSigDesc: "Needs 4/5 signatures from 2 CTO members and 3 community members. Controls top 2 wallets.",
    topWallet: "Top wallet - 8.6%",
    topWalletDesc: "Locked on Gnosis until Dec 23: Marketing, listings & partnerships.",
    walletTwo: "Wallet #2 - 6.4%",
    walletTwoDesc: "Short term expenses, marketing and collaborations to grow the community.",
    organicAdoption: "Organic Adoption",
    organicAdoptionDesc: "Izumi-chan will never give token allocation to KOLs, callers or AMAs. If anyone wants $IZUMI, they can buy from the market.",
    seeMore: "See more..."
  },
  es: {
    introText: "Izumi-chan: El origen de Neiro",
    paragraphText: "Izumi-chan vivió en un refugio hasta que Kabosumama la rescató y la llamó Neiro.",
    communityTakeover: "Toma de la comunidad",
    communityTakeoverDesc: "Construyendo desde cero, sin KOLs pagados, sin acuerdos bajo la mesa. Izumi es puro crecimiento orgánico.",
    liquidityBurned: "100% de la liquidez quemada",
    liquidityBurnedDesc: "El desarrollador original quemó LP y renunció al contrato.",
    transparency: "Transparencia total",
    transparencyDesc: "Queremos establecer una nueva tendencia en los memecoins basada en la transparencia y comunicación.",
    noMoreRugs: "No más estafas",
    noMoreRugsDesc: "Olvídate de PvP o Cabal vs CTOs. Izumi será el nuevo estándar de confianza y optimismo.",
    longTermVision: "Visión a largo plazo",
    longTermVisionDesc: "Izumi es más que un memecoin, ha venido para quedarse, ¡pronto más información!",
    izumiChan: "Izumi-chan",
    izumiChanDesc: "El origen de Neiro... ¡Guau!",
    multiSigWallet: "Billetera multi-firma",
    multiSigDesc: "Necesita 4/5 firmas de 2 miembros del CTO y 3 miembros de la comunidad. Controla las 2 billeteras principales.",
    topWallet: "Billetera principal - 8.6%",
    topWalletDesc: "Bloqueado en Gnosis hasta el 23 de diciembre: Marketing, listados y asociaciones.",
    walletTwo: "Billetera #2 - 6.4%",
    walletTwoDesc: "Gastos a corto plazo, marketing y colaboraciones para hacer crecer la comunidad.",
    organicAdoption: "Adopción orgánica",
    organicAdoptionDesc: "Izumi-chan nunca dará asignación de tokens a KOLs, llamadores o AMAs. Si alguien quiere $IZUMI, puede comprarlo en el mercado.",
    seeMore: "Ver más..."
  },
  fr: {
    introText: "Izumi-chan : L'origine de Neiro",
    paragraphText: "Izumi-chan a vécu dans un refuge jusqu'à ce que Kabosumama la sauve et l'appelle Neiro.",
    communityTakeover: "Prise de contrôle par la communauté",
    communityTakeoverDesc: "Construire à partir de zéro, sans KOLs payés, sans accords en coulisses. Izumi parle de croissance organique.",
    liquidityBurned: "100% de liquidité brûlée",
    liquidityBurnedDesc: "Le développeur original a brûlé LP et renoncé au contrat.",
    transparency: "Construit sur la transparence",
    transparencyDesc: "Nous visons à commencer une nouvelle méta pour les memecoins basée sur la transparence et la communication.",
    noMoreRugs: "Plus de coups bas",
    noMoreRugsDesc: "Oubliez PvP ou Cabal contre CTOs. Plus de graphiques trompeurs. Izumi sera la nouvelle norme pour la confiance et l'optimisme.",
    longTermVision: "Vision à long terme",
    longTermVisionDesc: "Izumi est plus qu'un memecoin et elle est là pour rester, plus d'infos très bientôt !",
    izumiChan: "Izumi-chan",
    izumiChanDesc: "L'origine de Neiro... Ouaf !",
    multiSigWallet: "Portefeuille multi-signatures",
    multiSigDesc: "Besoin de 4/5 signatures de 2 membres du CTO et de 3 membres de la communauté. Contrôle des 2 principaux portefeuilles.",
    topWallet: "Portefeuille principal - 8,6%",
    topWalletDesc: "Bloqué sur Gnosis jusqu'au 23 décembre : marketing, listes et partenariats.",
    walletTwo: "Portefeuille #2 - 6,4%",
    walletTwoDesc: "Dépenses à court terme, marketing et collaborations pour développer la communauté.",
    organicAdoption: "Adoption organique",
    organicAdoptionDesc: "Izumi-chan ne donnera jamais d'allocation de jetons aux KOLs, aux appelants ou aux AMAs. Si quelqu'un veut $IZUMI, il peut l'acheter sur le marché.",
    seeMore: "Voir plus..."
  },
  de: {
    introText: "Izumi-chan: Der Ursprung von Neiro",
    paragraphText: "Izumi-chan lebte in einem Tierheim, bis Kabosumama sie rettete und Neiro nannte.",
    communityTakeover: "Community-Übernahme",
    communityTakeoverDesc: "Von Grund auf neu aufbauen, keine bezahlten KOLs, keine Absprachen unter dem Tisch. Izumi steht für organisches Wachstum.",
    liquidityBurned: "100% verbrannte Liquidität",
    liquidityBurnedDesc: "Der ursprüngliche Entwickler hat LP verbrannt und den Vertrag gekündigt.",
    transparency: "Basiert auf Transparenz",
    transparencyDesc: "Wir wollen eine neue Meta für Memecoins basierend auf Transparenz und Kommunikation starten.",
    noMoreRugs: "Keine weiteren Betrügereien",
    noMoreRugsDesc: "Vergiss PvP oder Cabal gegen CTOs. Keine Charts, die dich betrügen. Izumi wird der neue Standard für Vertrauen und Optimismus.",
    longTermVision: "Langfristige Vision",
    longTermVisionDesc: "Izumi ist mehr als ein Memecoin und sie ist hier, um zu bleiben, bald mehr dazu!",
    izumiChan: "Izumi-chan",
    izumiChanDesc: "Der Ursprung von Neiro... Wuff!",
    multiSigWallet: "Multi-Sig-Wallet",
    multiSigDesc: "Benötigt 4/5 Unterschriften von 2 CTO-Mitgliedern und 3 Mitgliedern der Community. Kontrolliert die 2 besten Wallets.",
    topWallet: "Top-Wallet - 8,6%",
    topWalletDesc: "Bis zum 23. Dezember auf Gnosis gesperrt: Marketing, Listungen und Partnerschaften.",
    walletTwo: "Wallet #2 - 6,4%",
    walletTwoDesc: "Kurzfristige Ausgaben, Marketing und Kooperationen zum Wachstum der Community.",
    organicAdoption: "Organische Annahme",
    organicAdoptionDesc: "Izumi-chan wird niemals Token-Zuteilungen an KOLs, Caller oder AMAs vergeben. Wenn jemand $IZUMI möchte, kann er es auf dem Markt kaufen.",
    seeMore: "Mehr sehen..."
  },
  it: {
    introText: "Izumi-chan: L'origine di Neiro",
    paragraphText: "Izumi-chan ha vissuto in un rifugio fino a quando Kabosumama l'ha salvata e l'ha chiamata Neiro.",
    communityTakeover: "Gestione della comunità",
    communityTakeoverDesc: "Costruire dalle fondamenta, niente KOL pagati, niente affari sottobanco. Izumi è tutto sulla crescita organica.",
    liquidityBurned: "100% di liquidità bruciata",
    liquidityBurnedDesc: "Lo sviluppatore originale ha bruciato LP e rinunciato al contratto.",
    transparency: "Costruito sulla trasparenza",
    transparencyDesc: "Vogliamo avviare una nuova meta per i memecoins basata su trasparenza e comunicazione.",
    noMoreRugs: "Niente più truffe",
    noMoreRugsDesc: "Dimentica PvP o Cabal contro CTOs. Niente più grafici che ti ingannano. Izumi sarà il nuovo standard di fiducia e ottimismo.",
    longTermVision: "Visione a lungo termine",
    longTermVisionDesc: "Izumi è più di un memecoin ed è qui per restare, presto di più!",
    izumiChan: "Izumi-chan",
    izumiChanDesc: "L'origine di Neiro... Bau!",
    multiSigWallet: "Portafoglio multi-firma",
    multiSigDesc: "Richiede 4/5 firme da 2 membri del CTO e 3 membri della comunità. Controlla i 2 portafogli principali.",
    topWallet: "Portafoglio principale - 8,6%",
    topWalletDesc: "Bloccato su Gnosis fino al 23 dicembre: marketing, listati e partnership.",
    walletTwo: "Portafoglio #2 - 6,4%",
    walletTwoDesc: "Spese a breve termine, marketing e collaborazioni per far crescere la comunità.",
    organicAdoption: "Adozione organica",
    organicAdoptionDesc: "Izumi-chan non darà mai allocazioni di token a KOL, chiamatori o AMAs. Se qualcuno vuole $IZUMI, può comprarlo sul mercato.",
    seeMore: "Vedi di più..."
  },
  pt: {
    introText: "Izumi-chan: A origem de Neiro",
    paragraphText: "Izumi-chan viveu em um abrigo até que Kabosumama a resgatou e a nomeou de Neiro.",
    communityTakeover: "Tomada pela comunidade",
    communityTakeoverDesc: "Construindo do zero, sem KOLs pagos, sem acordos nos bastidores. Izumi é sobre crescimento orgânico.",
    liquidityBurned: "100% de liquidez queimada",
    liquidityBurnedDesc: "O desenvolvedor original queimou LP e renunciou ao contrato.",
    transparency: "Construído com transparência",
    transparencyDesc: "Estamos começando uma nova Meta para memecoins baseada em transparência e comunicação.",
    noMoreRugs: "Sem mais rugpulls",
    noMoreRugsDesc: "Esqueça PvP ou Cabal vs CTOs. Sem mais gráficos que enganem. Izumi será o novo padrão de confiança e otimismo.",
    longTermVision: "Visão de longo prazo",
    longTermVisionDesc: "Izumi é mais do que um memecoin e ela veio para ficar, mais informações em breve!",
    izumiChan: "Izumi-chan",
    izumiChanDesc: "A origem de Neiro... Au au!",
    multiSigWallet: "Carteira multi-assinatura",
    multiSigDesc: "Precisa de 4/5 assinaturas de 2 membros do CTO e 3 membros da comunidade. Controla as 2 principais carteiras.",
    topWallet: "Carteira principal - 8,6%",
    topWalletDesc: "Bloqueado no Gnosis até 23 de dezembro: Marketing, listagens e parcerias.",
    walletTwo: "Carteira #2 - 6,4%",
    walletTwoDesc: "Despesas de curto prazo, marketing e colaborações para crescer a comunidade.",
    organicAdoption: "Adoção orgânica",
    organicAdoptionDesc: "Izumi-chan nunca dará alocação de tokens a KOLs, chamadores ou AMAs. Se alguém quiser $IZUMI, pode comprar no mercado.",
    seeMore: "Veja mais..."
  },
  cn: {
    introText: "Izumi-chan: Neiro的起源",
    paragraphText: "Izumi-chan在庇护所生活，直到Kabosumama救了她并给她取名为Neiro。",
    communityTakeover: "社区接管",
    communityTakeoverDesc: "从零开始，没有付费KOL，没有地下交易。Izumi完全是有机增长。",
    liquidityBurned: "100%流动性被销毁",
    liquidityBurnedDesc: "原始开发者销毁了流动性池并放弃了合约。",
    transparency: "建立在透明基础上",
    transparencyDesc: "我们旨在为基于透明度和沟通的memecoins开启新的Meta。",
    noMoreRugs: "不再有诈骗",
    noMoreRugsDesc: "忘记PvP或Cabal与CTO的对抗。Izumi将成为信任和牛市的新标准。",
    longTermVision: "长期愿景",
    longTermVisionDesc: "Izumi不仅仅是一个memecoin，她来到这里是为了留下来，稍后将提供更多信息！",
    izumiChan: "Izumi-chan",
    izumiChanDesc: "Neiro的起源...汪！",
    multiSigWallet: "多重签名钱包",
    multiSigDesc: "需要2名CTO成员和3名社区成员中的4/5签名。控制前两个钱包。",
    topWallet: "顶级钱包 - 8.6%",
    topWalletDesc: "锁定在Gnosis，直到12月23日：市场营销、上市和合作。",
    walletTwo: "钱包 #2 - 6.4%",
    walletTwoDesc: "短期支出、市场营销和合作以发展社区。",
    organicAdoption: "有机采纳",
    organicAdoptionDesc: "Izumi-chan绝不会将代币分配给KOL、呼叫者或AMA。如果有人想要$IZUMI，他们可以在市场上购买。",
    seeMore: "查看更多..."
  },
  jp: {
    introText: "イズミちゃん：ネイロの起源",
    paragraphText: "イズミちゃんはシェルターで生活していましたが、カボスママによって救われ、ネイロという名前が付けられました。",
    communityTakeover: "コミュニティの引き継ぎ",
    communityTakeoverDesc: "ゼロからの構築、支払い済みのKOLなし、裏取引なし。イズミはオーガニックな成長を重視しています。",
    liquidityBurned: "100%の流動性が燃やされました",
    liquidityBurnedDesc: "元の開発者はLPを燃やし、契約を放棄しました。",
    transparency: "透明性の確保",
    transparencyDesc: "私たちは、透明性とコミュニケーションに基づくメメコインの新しいメタを開始することを目指しています。",
    noMoreRugs: "詐欺はもうありません",
    noMoreRugsDesc: "PvPやCabal対CTOを忘れてください。イズミは信頼と強気の新基準となります。",
    longTermVision: "長期的ビジョン",
    longTermVisionDesc: "イズミは単なるメメコインではなく、ここに留まるためにやってきました。詳細はまもなくお知らせします！",
    izumiChan: "イズミちゃん",
    izumiChanDesc: "ネイロの起源…ワン！",
    multiSigWallet: "マルチシグウォレット",
    multiSigDesc: "2人のCTOメンバーと3人のコミュニティメンバーからの4/5の署名が必要です。トップ2のウォレットを管理します。",
    topWallet: "トップウォレット - 8.6%",
    topWalletDesc: "12月23日までGnosisでロックされています：マーケティング、上場、パートナーシップ。",
    walletTwo: "ウォレット #2 - 6.4%",
    walletTwoDesc: "短期的な支出、マーケティング、コミュニティ成長のためのコラボレーション。",
    organicAdoption: "オーガニックな採用",
    organicAdoptionDesc: "イズミちゃんはKOL、コーラー、AMAにトークンを割り当てることは決してありません。誰かが$IZUMIを欲しい場合、市場から購入できます。",
    seeMore: "もっと見る..."
  },
  ar: {
    introText: "إيزومي-تشان: أصل نيرو",
    paragraphText: "عاشت إيزومي-تشان في ملجأ حتى أنقذتها كابوسوما وأطلقت عليها اسم نيرو.",
    communityTakeover: "استحواذ المجتمع",
    communityTakeoverDesc: "نبني من الصفر، لا كولز مدفوعين، لا صفقات تحت الطاولة. إيزومي تدور حول النمو العضوي.",
    liquidityBurned: "100% من السيولة تم حرقها",
    liquidityBurnedDesc: "أحرق المطور الأصلي LP وتنازل عن العقد.",
    transparency: "بناءً على الشفافية",
    transparencyDesc: "نهدف إلى بدء ميتا جديدة للعملات الميمية تستند إلى الشفافية والتواصل.",
    noMoreRugs: "لا مزيد من الاحتيالات",
    noMoreRugsDesc: "انسَ PvP أو Cabal مقابل CTOs. لا مزيد من الرسوم البيانية المخادعة. ستصبح إيزومي المعيار الجديد للثقة والتفاؤل.",
    longTermVision: "رؤية طويلة المدى",
    longTermVisionDesc: "إيزومي أكثر من مجرد عملة ميمية وقد جاءت لتبقى، المزيد عن هذا قريبًا!",
    izumiChan: "إيزومي-تشان",
    izumiChanDesc: "أصل نيرو... ووف!",
    multiSigWallet: "محفظة متعددة التوقيعات",
    multiSigDesc: "تحتاج إلى 4/5 توقيعات من 2 من أعضاء CTO و3 من أعضاء المجتمع. تتحكم في أعلى محفظتين.",
    topWallet: "أعلى محفظة - 8.6%",
    topWalletDesc: "مقفلة على Gnosis حتى 23 ديسمبر: التسويق، الإدراجات والشراكات.",
    walletTwo: "المحفظة #2 - 6.4%",
    walletTwoDesc: "نفقات قصيرة الأجل، التسويق والتعاون لنمو المجتمع.",
    organicAdoption: "التبني العضوي",
    organicAdoptionDesc: "لن تقدم إيزومي-تشان تخصيص الرموز إلى KOLs أو المتصلين أو AMAs. إذا أراد أي شخص $IZUMI، يمكنه شراؤها من السوق.",
    seeMore: "رؤية المزيد..."
  },
  ru: {
    introText: "Идзуми-тян: Происхождение Нейро",
    paragraphText: "Идзуми-тян жила в приюте, пока Кабосумама не спасла её и не назвала Нейро.",
    communityTakeover: "Переход к сообществу",
    communityTakeoverDesc: "Строим с нуля, без оплаченных KOL, без сделок под столом. Идзуми ориентируется на органический рост.",
    liquidityBurned: "100% ликвидности сожжено",
    liquidityBurnedDesc: "Исходный разработчик сжег LP и отказался от контракта.",
    transparency: "Построено на прозрачности",
    transparencyDesc: "Мы стремимся начать новую мету для мемкоинов, основанную на прозрачности и общении.",
    noMoreRugs: "Больше никаких обманов",
    noMoreRugsDesc: "Забудьте о PvP или Cabal против CTO. Больше никаких обманов с графиками. Идзуми станет новым стандартом доверия и оптимизма.",
    longTermVision: "Долгосрочное видение",
    longTermVisionDesc: "Идзуми — это больше, чем мемкоин, и она пришла, чтобы остаться, больше об этом совсем скоро!",
    izumiChan: "Идзуми-тян",
    izumiChanDesc: "Происхождение Нейро... Гав!",
    multiSigWallet: "Мультиподписной кошелек",
    multiSigDesc: "Требуется 4/5 подписей от 2 членов CTO и 3 членов сообщества. Управляет двумя основными кошельками.",
    topWallet: "Ведущий кошелек - 8.6%",
    topWalletDesc: "Заблокирован на Gnosis до 23 декабря: маркетинг, листинги и партнерства.",
    walletTwo: "Кошелек #2 - 6.4%",
    walletTwoDesc: "Краткосрочные расходы, маркетинг и сотрудничество для роста сообщества.",
    organicAdoption: "Органическое принятие",
    organicAdoptionDesc: "Идзуми-тян никогда не будет выделять токены KOL, коллерам или AMA. Если кто-то хочет $IZUMI, он может купить его на рынке.",
    seeMore: "Смотреть больше..."
  }
};



document.addEventListener("DOMContentLoaded", function() {
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  const dropdownItems = document.querySelectorAll('.dropdown-item'); // Language items

  // Toggle the dropdown content when the button is clicked
  dropdownBtn.addEventListener('click', function() {
      // Toggle display using class
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', function(event) {
      if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
          dropdownContent.style.display = 'none'; // Hide dropdown if clicked outside
      }
  });

  // Close the dropdown when a language is selected
  dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
          const selectedLang = this.getAttribute('data-lang');
          updateLanguage(selectedLang); // Call your updateLanguage function
          dropdownContent.style.display = 'none'; // Hide dropdown after language selection
      });
  });
});



// Function to switch language
function setLanguage(lang) {
  const translation = translations[lang];
  if (translation) {
    document.getElementById("title").innerText = translation.title;
    document.getElementById("intro-text").innerText = translation.introText;
    // Update other elements similarly
  }
}

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function() {
      const selectedLang = this.getAttribute('data-lang');
      updateLanguage(selectedLang);
  });
});

function updateLanguage(lang) {
  // Check if the language exists in translations object
  if (!translations[lang]) return;

  // Update the text content based on the selected language
  document.querySelector('h1').textContent = translations[lang].introText;
  document.querySelector('.topContainer p').textContent = translations[lang].paragraphText;

  // Grid items
  const gridItems = document.querySelectorAll('.custom-grid-item.custom-text');
  gridItems[0].querySelector('h3').textContent = translations[lang].communityTakeover;
  gridItems[0].querySelector('p').textContent = translations[lang].communityTakeoverDesc;

  gridItems[1].querySelector('h3').textContent = translations[lang].liquidityBurned;
  gridItems[1].querySelector('p').textContent = translations[lang].liquidityBurnedDesc;

  gridItems[2].querySelector('h3').textContent = translations[lang].transparency;
  gridItems[2].querySelector('p').textContent = translations[lang].transparencyDesc;

  gridItems[3].querySelector('h3').textContent = translations[lang].noMoreRugs;
  gridItems[3].querySelector('p').textContent = translations[lang].noMoreRugsDesc;

  gridItems[4].querySelector('h3').textContent = translations[lang].longTermVision;
  gridItems[4].querySelector('p').textContent = translations[lang].longTermVisionDesc;

  gridItems[5].querySelector('h3').textContent = translations[lang].izumiChan;
  gridItems[5].querySelector('p').textContent = translations[lang].izumiChanDesc;
}


function translateNarrative(language) {
  const narrativeElements = document.querySelectorAll('.narrative [data-key]');
  narrativeElements.forEach(element => {
      const key = element.getAttribute('data-key');
      element.innerText = translations[language].narrative[key.split('.')[1]];
  });
}


// Select the language menu and toggle button
const languageMenu = document.querySelector('.language-menu');
const toggleButton = document.querySelector('.toggle-button');

// Show/hide dropdown on button click
toggleButton.addEventListener('click', function() {
    languageMenu.classList.toggle('show');
});

// Close the dropdown if clicking outside of it
document.addEventListener('click', function(event) {
    if (!toggleButton.contains(event.target) && !languageMenu.contains(event.target)) {
        languageMenu.classList.remove('show');
    }
});

// Event listener for language selection
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        const selectedLang = this.getAttribute('data-lang');
        updateLanguage(selectedLang);
        languageMenu.classList.remove('show'); // Close the dropdown after selection
    });
});

// Function to update the language
function updateLanguage(lang) {
    if (!translations[lang]) return;

    // Update main texts
    const mainTexts = {
        'h1': translations[lang].introText,
        '.topContainer p': translations[lang].paragraphText,
    };

    for (const [selector, text] of Object.entries(mainTexts)) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    }

    // Grid items
    const gridItems = document.querySelectorAll('.custom-grid-item.custom-text');
    const gridItemsData = [
        { key: 'communityTakeover', index: 0 },
        { key: 'liquidityBurned', index: 1 },
        { key: 'transparency', index: 2 },
        { key: 'noMoreRugs', index: 3 },
        { key: 'longTermVision', index: 4 },
        { key: 'izumiChan', index: 5 },
    ];

    gridItemsData.forEach(item => {
        const gridItem = gridItems[item.index];
        if (gridItem) {
            const title = gridItem.querySelector('h3');
            const description = gridItem.querySelector('p');
            if (title && description) {
                title.textContent = translations[lang][item.key];
                description.textContent = translations[lang][item.key + 'Desc'];
            }
        }
    });


  // Narrative items
    const narrativeItems = document.querySelectorAll('.narrative-right .narrative'); // Adjusted selector
    const narrativeData = [
        { titleKey: 'multiSigWallet', descriptionKey: 'multiSigDesc', index: 0 },
        { titleKey: 'topWallet', descriptionKey: 'topWalletDesc', index: 1 },
        { titleKey: 'walletTwo', descriptionKey: 'walletTwoDesc', index: 2 },
        { titleKey: 'organicAdoption', descriptionKey: 'organicAdoptionDesc', index: 3 },
    ];

    narrativeData.forEach(item => {
        const narrativeItem = narrativeItems[item.index];
        if (narrativeItem) {
            const title = narrativeItem.querySelector('h3');
            const description = narrativeItem.querySelector('p');
            if (title && description) {
                title.textContent = translations[lang][item.titleKey];
                description.textContent = translations[lang][item.descriptionKey];
            }
        }
    });

    hideDropdown();
  }
