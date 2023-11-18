import { BarList, Bold, Flex, Text, Title } from "@tremor/react";
import { Card } from '@nextui-org/react'
import {arcos,gmail,invgate,wsp} from '../../assets/icons'
import { Incident } from "../../interfaces/incident.interface";

interface Props {
    data: Incident[]
}

export const BarChartComponent = ({data}:Props) => {
    const getTotal = (name:string) => {
        return data?.filter(incident => incident.via.name === name).length;
    }
    const dataAnalitics = [
        {
            name: "Invgate Arcos",
            value: getTotal('Invgate Arcos'),
            icon: () =><img src={arcos} alt="Invgate Arcos" className="w-6 mr-2" loading="lazy"/>
        
        },
        {
            name: "Invgate Sia",
            value: getTotal('Invgate SIA'),
            icon: () =><img src={invgate} alt="Invgate Sia" className="w-6 mr-2" loading="lazy"/>
        },
        {
            name: "Whatsapp",
            value: getTotal('Whatsapp'),
            icon: () =><img src={wsp} alt="Whatsapp" className="w-6 mr-2" loading="lazy"/>
        },
        {
            name: "Gmail",
            value: getTotal('Email'),
            icon: () =><img src={gmail} alt="Email" className="w-6 mr-2" loading="lazy"/>
        },
    ];
    
    return (
        <Card className="md:w-1/3 w-full p-4">
            <Title>Vía de solicitud</Title>
            <Flex className="mt-4">
                <Text>
                    <Bold>Origen</Bold>
                </Text>
                <Text>
                    <Bold>Cantidad</Bold>
                </Text>
            </Flex>
            <BarList data={dataAnalitics} className="mt-2" />
        </Card>
    )
}