import { useState, useContext, createContext } from 'react';
import img from './assets/images/olaolu.jpg'
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [modal, setModal] = useState({
        modalOpen: false, modalImg: '',
    })
    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);
    const setModalImage = image => setModal(prev=>{
        return {...prev, modalImg: image}
    });
    const openModal = () => setModal(prev => {
        return { ...prev, modalOpen: true }
    });
    const closeModal = () => setModal(prev=>{
        return {...prev, modalOpen: false}
    });
    return <AppContext.Provider value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        setModalImage,
        openModal,
        closeModal,
        modalImg: modal.modalImg,
        modalOpen: modal.modalOpen,
    }}>{children}</AppContext.Provider>
};

const useGlobalContext = () => useContext(AppContext);

export { useGlobalContext, AppProvider }