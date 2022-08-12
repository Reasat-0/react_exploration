
// import ClickCounter from './ComponentsNew/HOC/ClickCounter';
// import HoverCounter from './ComponentsNew/HOC/HoverCounter';

import ClickCounter from './ComponentsNew/RenderProps/ClickCounter';
import HoverCounter from './ComponentsNew/RenderProps/HoverCounter';
import RenderComponent from './ComponentsNew/RenderProps/RenderComponent';

const AppRenderProps = () => {
    return (
        <>
            <RenderComponent 
                render= {
                    (count,handleEvent) => 
                    
                    <ClickCounter 
                        count={count} 
                        handleEvent={handleEvent}
                    />
                    
                }
            />

            <RenderComponent 
                render= {
                    (count,handleEvent) => 
                    
                    <HoverCounter 
                        count={count} 
                        handleEvent={handleEvent}
                    />
                    
                }
            />
        </>
    )
}

export default AppRenderProps;