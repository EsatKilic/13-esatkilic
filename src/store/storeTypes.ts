// storeTypes.ts

// Redux store'daki kampanyaların tipini tanımlayalım
export interface Campaign {
  id: string;
  image: string;
  title: string;
  subtitle: string;
    // Diğer kampanya özellikleri...
  }
  
  // Redux store'un durum yapısını tanımlayalım
  export interface RootState {
    campaigns: {
      campaigns: Campaign[]; // Yukarıdaki Campaign tipinden oluşan bir dizi
      loading: boolean;
      error: string | null;
    };
    storage: {
      imageUrl: string; // imageUrl gibi özellikleri ekleyin ve veri tiplerini belirtin
      // Diğer storage özellikleri buraya eklenebilir
    };
    
  }
  