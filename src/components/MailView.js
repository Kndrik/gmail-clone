import MailViewButton from "./MailViewButton";
import AnimatedButton from "./AnimatedButton";

const MailView = (props) => {
    return (
        <div className="mailView">
            <div className="mailViewHeader">
                <div className="left">
                    <h2 className="mailViewTitle">Title</h2>
                </div>
                <div className="right">
                    <AnimatedButton svgData="M652.913 393.304V281.087H307.087v112.217h-79.218v-192h504.827v192h-79.783Zm-507.826 79.783h669.826-669.826Zm584.586 108.001q15.109 0 25.805-10.59t10.696-25.628q0-14.826-10.59-25.804-10.59-10.979-25.911-10.979-15.108 0-25.804 10.979-10.696 10.978-10.696 25.804 0 14.826 10.696 25.522 10.696 10.696 25.804 10.696Zm-76.76 299.999V721.872H307.087v159.215h345.826Zm79.783 76.392H227.869V771.87h-162V514q0-50.476 34.292-85.586t84.709-35.11h590.26q50.816 0 85.191 35.11T894.696 514v257.87h-162v185.609Zm82.217-265.392V512.655q0-17.143-11.438-28.355-11.437-11.213-28.345-11.213H184.87q-16.512 0-28.148 11.812-11.635 11.812-11.635 29.101v178.087h82.782v-49.999h504.827v49.999h82.217Z" />
                </div>
            </div>
            <div className="mailViewContent">
                <div className="left">
                    <div className="photoContainer">
                        <img className="photo" src="https://lh3.googleusercontent.com/a/AGNmyxa5GaWKrQA0nJwoIZqGWx9H76YgoBn6EVHlh7eY6Q=s96-c" />
                    </div>
                </div>
                <div className="right">
                    <div className="mailViewInformations">
                        <div className="top">
                            <div className="left">
                                <span className="mailViewSenderName">Charles Lamarque</span>
                                <span className="mailViewSenderAddress">{"<charles.lamarque69@gmail.com>"}</span>
                            </div>
                            <div className="right">
                                <span className="mailViewDate">10:53 - il y a 4 heures</span>
                                <AnimatedButton svgData="M776.891 860.065V682q0-52.565-36.804-89.25t-89.13-36.685H244.761L394.696 706l-47.739 47.739L114.978 522l231.979-231.739L394.696 338 244.761 487.935h406.196q79.913 0 136.989 56.576Q845.022 601.087 845.022 682v178.065h-68.131Z" />
                            </div>
                        </div>
                        <div className="bottom">
                            <span className="mailViewReceiver">À Charles</span>
                        </div>
                    </div>
                    <div className="mailViewText">
                        it's me
                    </div>
                    <div className="mailViewButtons">
                        <MailViewButton 
                            text="Répondre"
                            svgData="M776.891 860.065V682q0-52.565-36.804-89.25t-89.13-36.685H244.761L394.696 706l-47.739 47.739L114.978 522l231.979-231.739L394.696 338 244.761 487.935h406.196q79.913 0 136.989 56.576Q845.022 601.087 845.022 682v178.065h-68.131Z" />
                        <MailViewButton 
                            text="Transférer"
                            svgData="M114.978 860.065V682q0-80.796 57.135-137.431 57.135-56.634 136.93-56.634h406.196L565.304 338l47.739-47.739L845.022 522 613.043 753.739 565.304 706l149.935-149.935H308.965q-52.313 0-88.965 36.745-36.652 36.744-36.652 89.19v178.065h-68.37Z" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MailView;