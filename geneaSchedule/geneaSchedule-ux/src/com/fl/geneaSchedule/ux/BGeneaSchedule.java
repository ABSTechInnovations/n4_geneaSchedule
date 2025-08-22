package com.fl.geneaSchedule.ux;

import com.tridium.schedule.BIWebScheduler;
import com.tridium.schedule.ux.BScheduleJsBuild;

import javax.baja.naming.BOrd;
import javax.baja.nre.annotations.AgentOn;
import javax.baja.nre.annotations.NiagaraSingleton;
import javax.baja.nre.annotations.NiagaraType;
import javax.baja.sys.BSingleton;
import javax.baja.sys.Context;
import javax.baja.sys.Sys;
import javax.baja.sys.Type;
import javax.baja.web.BIFormFactorMax;
import javax.baja.web.BIOffline;
import javax.baja.web.js.BIJavaScript;
import javax.baja.web.js.JsInfo;

@NiagaraType(
        agent = {@AgentOn(
                types = {"schedule:WeeklySchedule", "schedule:Scheduler", "niagaraVirtual:NiagaraVirtualWeeklySchedule"},
                requiredPermissions = "r"
        )}
)
@NiagaraSingleton
public class BGeneaSchedule extends BSingleton implements BIJavaScript, BIFormFactorMax, BIOffline, BIWebScheduler {
    public static final BGeneaSchedule INSTANCE = new BGeneaSchedule();
    public static final Type TYPE = Sys.loadType(BGeneaSchedule.class);
    private static final JsInfo jsInfo;

    public Type getType() {
        return TYPE;
    }

    private BGeneaSchedule() {
    }

    public JsInfo getJsInfo(Context cx) {
        return jsInfo;
    }

    static {
        jsInfo = JsInfo.make(BOrd.make("module://geneaSchedule/rc/geneaScheduler.js"));
    }
}