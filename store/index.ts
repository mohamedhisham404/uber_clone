import { DriverStore, LocationStore, MarkerData } from "@/types/type";
import { create } from "zustand";

export const useLocationStore = create<LocationStore>((set) => ({
    userAddress: null,
    userLatitude: null,
    userLongitude: null,
    destinationAddress: null,
    destinationLongitude: null,
    destinationLatitude: null,
    setUserLocation: ({
        latitude,
        longitude,
        address,
    }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => {
        set(() => ({
            userAddress: address,
            userLongitude: longitude,
            userLatitude: latitude,
        }));
    },
    setDestinationLocation: ({
        latitude,
        longitude,
        address,
    }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => {
        set(() => ({
            destinationAddress: address,
            destinationLongitude: longitude,
            destinationLatitude: latitude,
        }));
    },
    
}));

export const useDriverStore = create<DriverStore>((set)=>({
    driver:[] as MarkerData[],
    selectedDriver:null,
    setSelectedDriver:(driverId:number)=>
        set(()=>({selectedDriver:driverId})),
    setDrivers:(drivers:MarkerData[])=>
        set(()=>({drivers:drivers})),
    clearDriver:()=>set(()=>({selectedDriver:null})),
}))


