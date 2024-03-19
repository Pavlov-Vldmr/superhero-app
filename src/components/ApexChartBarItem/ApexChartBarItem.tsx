import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import Box from '@mui/material/Box';

function ApexChartBarItem(props: { stat: Object }) {
    const stat = props.stat as Array<[]>
    const statLable = stat[0].toString()
    const statVal = Number(stat[1])

    const label =
        statLable.charAt(0).toUpperCase()
        + statLable.slice(1)

    const options: ApexOptions = {
        series: [statVal],
        colors: ["#20E647"],
        chart: {
            height: 200,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '60%',
                    background: "#33333370"
                },
                track: {
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    },
                    background: '#33333330',
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#feeeee",
                        fontSize: "13px",
                        fontFamily: "Roboto",
                    },
                    value: {
                        color: "#feeeee55",
                        fontSize: "15px",
                        show: true
                    }
                }
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: ["red"],
                stops: [20, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: [label],
    };

    return (
        <>
            <Box maxWidth={180} maxHeight={150}>
                <Box id="chart">
                    <ReactApexChart options={options} series={options.series} height={options.chart?.height} type="radialBar" />
                </Box>
                <div id="html-dist"></div>
            </Box>
        </>
    )
}

export default ApexChartBarItem;