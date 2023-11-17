import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';

export const fetchCampaigns = createAsyncThunk(
  'campaigns/fetchCampaigns',
  async () => {
    try {
      const campaignsCollection = collection(db, 'campaigns');
      const querySnapshot = await getDocs(campaignsCollection);

      const campaignsList = [];
      querySnapshot.forEach((doc) => {
        const { id, image, title, subtitle } = doc.data();
        campaignsList.push({ id, image, title, subtitle });
      });

      return campaignsList;
    } catch (error) {
      throw new Error('Error fetching campaigns:', error);
    }
  }
);

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState: {
    campaigns: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Gerekirse ek reducer'ları buraya ekleyebilirsiniz
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaigns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampaigns.fulfilled, (state, action) => {
        state.loading = false;
        state.campaigns = action.payload;
      })
      .addCase(fetchCampaigns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default campaignsSlice.reducer;
