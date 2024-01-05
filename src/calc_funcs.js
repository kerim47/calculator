// Bölme işlemi
function bol(x, y) {
  if (y !== 0) {
    return {
      islem: "bolme",
      sonuc: x / y,
    };
  } else {
    return {
      islem: "bolme",
      hata: "Hata: Sıfıra bölme hatası",
    };
  }
}

// Üs alma işlemi
function usAlma(x, y) {
  return {
    islem: "usAlma",
    sonuc: Math.pow(x, y),
  };
}

// Karekök alma işlemi
function karekokAlma(x) {
  if (x >= 0) {
    return {
      islem: "karekokAlma",
      sonuc: Math.sqrt(x),
    };
  } else {
    return {
      islem: "karekokAlma",
      hata: "Hata: Negatif sayının karekökü alınamaz",
    };
  }
}

// Mod alma işlemi
function kalan(x, y) {
  if (y !== 0) {
    return {
      islem: "modAlma",
      sonuc: x % y,
    };
  } else {
    return {
      islem: "modAlma",
      hata: "Hata: Sıfıra mod alma hatası",
    };
  }
}

// Çarpma işlemi
function carpma(a, b) {
  return {
    islem: "carpma",
    sonuc: a * b,
  };
}

// Toplama işlemi
function topla(a, b) {
  return {
    islem: "toplama",
    sonuc: a + b,
  };
}

function cikarma(a, b) {
  return {
    islem: "cikarma",
    sonuc: a - b,
  };
}

export { bol, usAlma, karekokAlma, kalan, carpma, topla, cikarma};
