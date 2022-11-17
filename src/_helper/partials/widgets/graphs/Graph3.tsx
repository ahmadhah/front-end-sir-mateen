/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React, { useEffect, useRef } from 'react'
import ApexCharts, { ApexOptions } from 'apexcharts'
import clsx from 'clsx'
import { getCSSVariableValue } from '../../../../_metronic/assets/ts/_utils'

type Props = {
    chartColor: string
    chartHeight: string
}

const Graph3: React.FC<Props> = ({ chartColor, chartHeight }) => {
    const chartRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!chartRef.current) {
            return
        }

        const chart = new ApexCharts(chartRef.current, chartOptions(chartHeight))
        if (chart) {
            chart.render()
        }

        return () => {
            if (chart) {
                chart.destroy()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chartRef])

    return (
        <>

            {/* begin::Chart  */}
            <div
                ref={chartRef}
                className={`mixed-widget-12-chart card-rounded-bottom bg-${chartColor}`}
            ></div>
            {/* end::Chart  */}


        </>
    )
}

const chartOptions = (chartHeight: string): ApexOptions => {
    const labelColor = getCSSVariableValue('--bs-gray-500')
    const borderColor = getCSSVariableValue('--bs-gray-200')

    return {
        series: [
            {
                name: 'Net Profit',
                data: [35, 65, 75, 55, 45, 60, 55],
            },
            {
                name: 'Revenue',
                data: [40, 70, 80, 60, 50, 65, 60],
            },
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: chartHeight,
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                borderRadius: 5,
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
        },
        yaxis: {
            min: 0,
            max: 100,
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
        },
        fill: {
            type: ['solid', 'solid'],
            opacity: [0.25, 1],
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
        },
        tooltip: {
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val) {
                    return '$' + val + ' thousands'
                },
            },
            marker: {
                show: false,
            },
        },
        colors: ['#ffffff', '#ffffff'],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                left: 20,
                right: 20,
            },
        },
    }
}

export { Graph3 }
