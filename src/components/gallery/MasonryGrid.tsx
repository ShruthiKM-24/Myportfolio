"use client";

import React, { useState } from "react";
import { gallery } from "@/app/resources/content";
import { IconButton } from "@/once-ui/components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from "./Gallery.module.scss";

const MasonryGrid = () => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [showMobileInfo, setShowMobileInfo] = useState(false);
  const [showZoomHint, setShowZoomHint] = useState(false);

  const openImage = (item: any) => {
    setSelectedItem(item);
    setShowMobileInfo(false); // Reset mobile info state
    
    // Show zoom hint only for first-time users on mobile
    if (!localStorage.getItem("hasSeenZoomHint") && window.innerWidth <= 768) {
      setShowZoomHint(true);
      localStorage.setItem("hasSeenZoomHint", "true");
      // Auto hide hint after 3 seconds
      setTimeout(() => setShowZoomHint(false), 3000);
    }
  };

  const closeImage = () => {
    setSelectedItem(null);
    setShowMobileInfo(false);
  };

  const toggleMobileInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMobileInfo(!showMobileInfo);
  };

  // Scroll Lock
  React.useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  return (
    <>
      <div className={styles.masonryGrid}>
        {gallery.images.map((item, index) => (
          <div key={index} className={styles.imageContainer} onClick={() => openImage(item)}>
            <img src={item.src} alt={item.alt} className={styles.gridImage} />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div key="lightbox-modal" className={styles.lightbox} onClick={closeImage}>
          {/* Main Close Button (X) - Always visible */}
          <div className={styles.mainCloseButton} onClick={(e) => { e.stopPropagation(); closeImage(); }}>
            <div className={styles.iconButton}>
              <IconButton key="close-btn" icon="close" variant="secondary" size="l" />
            </div>
          </div>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={`${styles.imageSection} ${showMobileInfo ? styles.shiftUp : ""}`}>
              {/* Zoom Hint Overlay */}
              {showZoomHint && (
                <div className={styles.zoomHint}>
                  <div className={styles.hintIcon}>🤌</div>
                  <span>Pinch to Zoom</span>
                </div>
              )}
              <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
                centerOnInit={true}
              >
                <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                  <img src={selectedItem.src} alt={selectedItem.alt} className={styles.lightboxImage} />
                </TransformComponent>
              </TransformWrapper>
              
              {/* Mobile Info Toggle Button (i) */}
              <div className={styles.mobileInfoToggle} onClick={toggleMobileInfo}>
                <div className={styles.iconButton}>
                  <IconButton 
                    key="info-toggle"
                    icon={showMobileInfo ? "chevronDown" : "infoCircle"} 
                    variant="secondary" 
                    size="l" 
                  />
                </div>
              </div>
            </div>

            <div className={`${styles.infoSection} ${showMobileInfo ? styles.showMobile : ""}`}>
              <div className={styles.infoContent}>
                {/* Mobile-only hide button inside description */}
                <div className={styles.mobileHideButton} onClick={toggleMobileInfo}>
                  <div className={styles.iconButton}>
                    <IconButton icon="close" variant="ghost" size="m" />
                  </div>
                </div>
                <h2 className={styles.infoTitle}>{selectedItem.title}</h2>
                <p className={styles.infoDescription}>{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryGrid;
