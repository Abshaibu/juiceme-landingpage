export default function Values({values, title}) {
    return (
        <div className="values">
            <h3 className="text-center mb-10">{title}</h3>
            <ul className="flex flex-wrap gap-4 justify-center">
                {values.map(({ title, icon, subtext }) => <li key={title}>
                    <img src={icon} alt={title} />
                    <p>{title}</p>
                    <p>{subtext}</p>
                </li>)}
            </ul>
        </div>
    )
}