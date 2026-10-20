import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { type Plan, volumeFeature } from "@/lib/plans";
import { whatsappMessage } from "@/lib/whatsapp";

export function PlanCard({ plan, emphasizeVolume }: { plan: Plan; emphasizeVolume?: boolean }) {
  return (
    <article className={`plan-card ${plan.featured ? "plan-card--featured" : ""}`}>
      {plan.featured && <span className="plan-card__badge">Recomendado <Sparkles size={12} /></span>}
      <p className="plan-card__eyebrow">{plan.eyebrow}</p>
      <h3>{plan.name}</h3>
      <p className="plan-card__description">{plan.description}</p>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature} className={emphasizeVolume && volumeFeature.test(feature) ? "plan-card__feature--volume" : undefined}>
            <Check size={15} /> {feature}
          </li>
        ))}
      </ul>
      <div className="plan-card__result"><small>Resultado esperado</small><strong>{plan.result}</strong></div>
      <a
        className="button button--outline"
        href={whatsappMessage(`Hola! Me interesa conocer más sobre el plan ${plan.name}.`)}
        target="_blank"
        rel="noreferrer"
        data-event="whatsapp_click"
        data-cta-location="plan"
        data-plan-name={plan.name}
      >
        Consultar plan <ArrowUpRight size={16} />
      </a>
    </article>
  );
}
