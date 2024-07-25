import React from "react";
// @ts-ignore
import { SlotMachine } from "@lucky-canvas/react";

const LuckySlotMachine: React.FC = () => {
    return (
        <>
            <SlotMachine
                width="240px"
                height="180px"
                blocks={[
                    { padding: "10px", background: "#869cfa" },
                    { padding: "10px", background: "#e9e8fe" },
                ]}
                slots={[
                    { speed: 1 },
                    { speed: 4 },
                    { speed: 20 },
                ]}
                prizes={[
                    {
                        background: "#bac5ee",
                        borderRadius: "10px",
                        imgs: [
                            {
                                width: "60%",
                                top: "20%",
                                src: "/ikun.jpg",
                            },
                        ],
                    },
                    {
                        background: "#bac5ee",
                        borderRadius: "10px",
                        imgs: [
                            {
                                width: "60%",
                                top: "20%",
                                src: "/ikun.jpg",
                            },
                        ],
                    },
                ]}
                defaultConfig={{
                    rowSpacing: "10px",
                    colSpacing: "10px",
                }}
            />
        </>
    );
};

export default LuckySlotMachine;