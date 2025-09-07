from fastapi import APIRouter
from pydantic import BaseModel
from typing import Dict

router = APIRouter(prefix="/v1", tags=["predict"])

class PredictRequest(BaseModel):
    athlete: Dict
    pbs: Dict[str, float] | None = None
    workouts: list[Dict]
    targets: list[int]
    ci: bool = True

@router.post("/predict")
def predict(req: PredictRequest):
    return {
        "predictions": {str(t): {"p50": 0.0, "p10": 0.0, "p90": 0.0} for t in req.targets},
        "meta": {"model":"blend_v1_stub"}
    }
